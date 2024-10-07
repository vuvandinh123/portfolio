import { Icons } from "@/components/icons";
import {
  HomeIcon,
  NotebookIcon,
  Code,
  PencilLine,
} from "lucide-react";

export const DATA = {
  name: "Vũ Văn Định",
  initials: "DV",
  url: "https://vuvandinh.id.vn",
  location: "HO CHI MINH CITY, VIETNAM",
  locationLink:
    "https://www.google.com/maps/place/Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.7546181,106.3655586,10z/data=!3m1!4b1!4m6!3m5!1s0x317529292e8d3dd1:0xf15f5aad773c112b!8m2!3d10.8230989!4d106.6296638!16zL20vMGhuNGg?entry=ttu&g_ep=EgoyMDI0MDgyMC4xIKXMDSoASAFQAw%3D%3D",
  description:
    "Là một kỹ sư phần mềm, tôi luôn đam mê học hỏi các công nghệ mới và tận dụng chúng để xây dựng những website thân thiện với người dùng, mang lại trải nghiệm tối ưu và hiệu quả.",
  summary: `Tôi là Vũ Văn Định, một lập trình viên Fullstack với 1 năm kinh nghiệm chuyên sâu trong phát triển phần mềm. Hiện tại, tôi đang làm việc tại Thành phố Hồ Chí Minh và luôn nuôi dưỡng niềm đam mê mãnh liệt với lập trình. Tôi yêu thích việc học hỏi và áp dụng các công nghệ mới để xây dựng các ứng dụng web hiệu quả và thân thiện với người dùng.

Tôi có kinh nghiệm vững vàng trong việc phát triển các dự án từ giai đoạn thiết kế giao diện người dùng cho đến quản lý cơ sở dữ liệu và xử lý logic phía máy chủ. Kỹ năng của tôi bao gồm HTML, CSS, JavaScript, React.js cho Frontend và Node.js, Express.js, MySQL cho Backend. Tôi luôn nỗ lực không ngừng để cập nhật kiến thức mới, cải tiến kỹ năng và đóng góp vào sự thành công của các dự án mà tôi tham gia.

Với mục tiêu liên tục phát triển và đạt được những thành tựu cao trong lĩnh vực công nghệ, tôi mong muốn được làm việc trong một môi trường năng động và thử thách, nơi tôi có thể phát huy tối đa khả năng của mình và góp phần tạo nên những sản phẩm phần mềm chất lượng.`,
  avatarUrl: "https://avatars.githubusercontent.com/u/109643771?v=4",
  skills: [
    "ReactJS",
    "Next.js",
    "Typescript",
    "Node.js",
    "PHP",
    "Laravel",
    "MySQL",
    "Docker",
    "Git",
    "Linux",
    "CI/CD",
    "Deployment",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Trang chủ" },
    { href: "/projects", icon: Code, label: "Dự án cá nhân" },
    { href: "/blogs", icon: NotebookIcon, label: "Bài viết" },
    { href: "/notes", icon: PencilLine, label: "Ghi chú" },
  ],
  contact: {
    email: "vuvandinh203@gmail.com",
    tel: "+84 333 583 800",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/vuvandinh123",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/vuvandinh203",
        icon: Icons.linkedin,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:vuvandinh203@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
    text: `
- **Email:** [vuvandinh203@gmail.com](mailto:vuvandinh203@gmail.com)
- **GitHub:** [github.com/vuvandinh123](https://github.com/vuvandinh123)
- **LinkedIn:** [linkedin.com/in/vuvandinh203](https://linkedin.com/in/vuvandinh203)
- **Số điện thoại:** +84 333 583 800 (nếu cần)

Tôi rất mong được nghe phản hồi từ bạn và sẵn sàng trao đổi thêm về các dự án cũng như cơ hội hợp tác.
    `,
  },

  work: [
    {
      company: "Aviatek",
      badges: ["Fullstack Developer", "Remote"],
      href: "https://aviatek.com.vn",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "https://aviatek.com.vn/assets/logo2-6PtbS5Th.png",
      start: "Tháng 5 2024",
      end: "Tháng 7 2024",
      description: `Tôi đã đảm nhận vai trò xây dựng và triển khai hệ thống web cho công ty, sử dụng React.js để phát triển giao diện người dùng, Node.js để xử lý logic phía máy chủ, và MySQL để quản lý cơ sở dữ liệu. Tôi thiết kế và triển khai một website với giao diện người dùng thân thiện, đồng thời phát triển API và cơ sở dữ liệu để đáp ứng các yêu cầu chức năng và đảm bảo hiệu suất cũng như bảo mật của hệ thống.`,
    },
    {
      company: "Cafebizland",
      href: "https://cafebizland.com",
      badges: ["Wordpress", "Remote"],
      location: "Remote",
      title: "Software Engineer",
      logoUrl:
        "https://cafebizland.com/wp-content/uploads/2023/05/cropped-cropped-favi-192x192.jpg",
      start: "Tháng 12 2023",
      end: "Tháng 4 2024",
      description:
        "Trong vai trò bảo trì hệ thống giao diện WordPress, tôi chịu trách nhiệm cập nhật và duy trì website hiện tại, đồng thời thêm các chức năng mới để cải thiện trải nghiệm người dùng và mở rộng khả năng của trang web. Tôi đảm bảo rằng các tính năng mới được tích hợp một cách hiệu quả, tương thích với các phần mở rộng hiện có, và đáp ứng nhu cầu của người dùng và mục tiêu của doanh nghiệp.",
    },
  ],
  education: [
    {
      school: "Cao Đẳng Công Thương TP. Hồ Chi Minh (HITC) ",
      href: "https://hitu.edu.vn/",
      degree: "Cử nhân",
      logoUrl: "https://hitu.edu.vn/wp-content/uploads/2021/12/favicon.ico",
      start: "2021",
      end: "2024",
      description: `
      Trong quá trình học tham gia xây dựng các trang web cho trường với mục đích tạo điều kiện thuận lợi cho nhiều hoạt động khác nhau như các cuộc thi của công đoàn trường hoặc trang web xác minh việc đi học bằng cách tìm kiếm vị trí và chụp ảnh chân dung trong khuôn viên trường. Và được tham gia các cuộc thi sinh viên giỏi nghề "Thiết kế website" do đoàn Thanh Niên Hồ Chí Minh tổ chức.
      `,
    },
  ],
  projects: [
    {
      title: "Website CMS giới thiệu công ty",
      href: "https://aviatek.com.vn",
      dates: "Tháng 6 2024 - Tháng 8 2024",
      active: true,
      description: `Xây dựng một hệ thống quản lý nội dung (CMS) để giới thiệu công ty và hỗ trợ quá trình tuyển dụng. Website cung cấp các thông tin về công ty, văn hóa doanh nghiệp, và các cơ hội việc làm. Ngoài ra, quản trị viên có thể dễ dàng cập nhật thông tin và quản lý các bài đăng tuyển dụng.`,
      technologies: [
        "React.js",
        "Redux",
        "TailwindCSS",
        "Node.js",
        "MySQL",
        "JWT",
        "Express",
      ],
      links: [
        {
          type: "Website",
          href: "https://aviatek.com.vn",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dwvttgtcw/video/upload/v1724353560/Screencast_from_23-08-2024_02_03_02_kywgch.webm",
    },
    {
      title: "Website thương mại điện tử B2C",
      href: "https://github.com/vuvandinh123",
      dates: "Tháng 12 2023 - Tháng 7 2024",
      active: true,
      description: `Dự Án Thương Mại Điện Tử BTC là một nền tảng bán hàng trực tuyến toàn diện, cho phép chủ cửa hàng quản lý sản phẩm và đơn hàng, người mua hàng thực hiện giao dịch, và quản trị viên điều hành hệ thống. Được phát triển bằng Node.js, React.js, và MySQL, dự án nhằm tối ưu hóa quy trình kinh doanh và nâng cao trải nghiệm người dùng.`,
      technologies: [
        "React.js",
        "Redux",
        "TailwindCSS",
        "Node.js",
        "MySQL",
        "JWT",
        "Firebase",
        "Express",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/vuvandinh123",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dwvttgtcw/image/upload/v1724349344/zwq6l9zvb83bqiabpsdi.gif",
      video: "",
    },
    {
      title: "Website kiểm tra trắc nghiệm",
      href: "https://github.com/vuvandinh123",
      dates: "Tháng 1 2024 - Tháng 5 2024",
      active: true,
      description: `Xây dựng một hệ thống website toàn diện để quản lý và tổ chức các kỳ thi trắc nghiệm cho công đoàn trường học. Hệ thống cho phép quản trị viên tạo và quản lý các bài thi trắc nghiệm, theo dõi kết quả và thống kê điểm số. Người dùng có thể đăng nhập, làm bài thi trực tuyến, và xem kết quả thi của mình.`,
      technologies: [
        "React.js",
        "Redux",
        "TailwindCSS",
        "Node.js",
        "MySQL",
        "JWT",
        "Firebase",
        "Express",
      ],
      links: [
        {
          type: "Website",
          href: "https://vuvandinh.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dwvttgtcw/video/upload/v1724351852/vet5gk8oxfj8yeioqxe3.webm",
    },
    {
      title: "Website hiển thị và đặt lịch dán decals",
      href: "https://dinhdev.click",
      dates: "Tháng 7 2024 - Hiện tại",
      active: true,
      description: `Phát triển một nền tảng web để hiển thị và đặt lịch dịch vụ dán decals cho khách hàng. Website cung cấp giao diện dễ sử dụng cho việc xem các mẫu decals, chọn dịch vụ phù hợp, và đặt lịch hẹn để dán decals.`,
      technologies: [
        "React.js",
        "Redux",
        "TailwindCSS",
        "PHP",
        "Laravel",
        "JWT",
      ],
      links: [
        {
          type: "Website",
          href: "https://dinhdev.click",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dwvttgtcw/video/upload/v1724352504/xpqwg3rokja5nd7gislq.webm",
    },
  ],
  
} as const;
