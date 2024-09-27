"use client";
import { DataTable } from "@/containers/admin/blog-page/data-table";
import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { columnsTable } from "@/containers/admin/blog-page/columns";
import { toast } from "@/components/ui/use-toast";
import Loading from "@/components/Loading";
import { ListNoteType } from "@/types/note";
import noteApiRequest from "@/apiRequest/note";
export default function NotePageAdmin() {
  const fetchData = async (): Promise<ListNoteType[]> => {
    const { payload }: any = await noteApiRequest.getList();
    const data = payload.data as ListNoteType[];
    return data;
  };
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery<ListNoteType[]>({
    queryKey: ["notes"],
    queryFn: () => fetchData(),
  });
  const handleDelete = async (id: string) => {
    try {
      const isProps = confirm("Are you sure?");
      if (!isProps) {
        return;
      }
      const { payload }: any = await noteApiRequest.delete(id);
      if (payload.status === 200) {
        queryClient.invalidateQueries("notes" as any);
        toast({
          title: "Success",
          description: payload.message || "Delete blog success",
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Something went wrong",
      });
    }
  };
  const columns = columnsTable(handleDelete);
  return (
    <div>
      {isLoading ? <Loading></Loading> : null}
      {!isLoading && !error && data ? (
        <DataTable columns={columns} data={data} />
      ) : null}
    </div>
  );
}
