import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

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
    { href: "/blog", icon: NotebookIcon, label: "Bài viết" },
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
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,

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
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
