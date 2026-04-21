const questions = [
  {
    type: "multiple",
    number: 1,
    question: "Một trong những phẩm chất tốt đẹp của xứ Nghệ đã được Chủ tịch Hồ Chí Minh tiếp thu và thể hiện rõ nét trong cuộc đời hoạt động cách mạng là",
    options: ["giỏi nghề thủ công", "trọng nghĩa khinh tài", "ý chí trong học tập", "kinh nghiệm đi biển"],
    answer: "C"
  },
  {
    type: "multiple",
    number: 2,
    question: "Một trong những ngôi trường mà Chủ tịch Hồ Chí Minh từng theo học thuở nhỏ là",
    options: ["Quốc học Huế", "Hoàng Phố", "Quốc Tử giám", "Đồng Khánh"],
    answer: "A"
  },
  {
    type: "multiple",
    number: 3,
    question: "Tháng 6-1925, Nguyễn Ái Quốc thành lập Hội Việt Nam Cách mạng Thanh niên khi đang hoạt động ở quốc gia nào sau đây?",
    options: ["Pháp", "Liên Xô", "Trung Quốc", "Việt Nam"],
    answer: "C"
  },
  {
    type: "multiple",
    number: 4,
    question: "Tờ báo nào dưới đây do Nguyễn Ái Quốc làm chủ nhiệm, kiêm chủ bút trong thời gian hoạt động ở Pháp (1918-1923)?",
    options: ["Sự thật", "Nhân đạo", "Người cùng khổ", "Đời sống công nhân"],
    answer: "C"
  },
  {
    type: "multiple",
    number: 5,
    question: "Ngoài quê hương Nghệ An, tuổi thơ của Chủ tịch Hồ Chí Minh còn gắn bó với địa phương nào sau đây?",
    options: ["Hà Nội", "Sài Gòn", "Huế", "Phan Thiết"],
    answer: "C"
  },
  {
    type: "multiple",
    number: 6,
    question: "Trong những năm 1911 – 1917, Nguyễn Tất Thành có hoạt động tiêu biểu nào sau đây?",
    options: ["Tìm hiểu thực tiễn các nước trên thế giới", "Sáng lập Đảng Cộng sản Việt Nam", "Tham gia sáng lập Đảng Cộng sản Pháp", "Thành lập Thanh niên Cộng sản đoàn"],
    answer: "A"
  },
  {
    type: "multiple",
    number: 7,
    question: "Trong quá trình ra đi tìm đường cứu nước từ 1911 đến 1930, Nguyễn Tất Thành không đặt chân đến quốc gia nào sau đây?",
    options: ["Liên Xô", "Trung Quốc", "Nhật Bản", "Thái Lan"],
    answer: "C"
  },
  {
    type: "multiple",
    number: 8,
    question: "Ở Trung Quốc tháng 2-1925, Nguyễn Ái Quốc thành lập tổ chức nào sau đây?",
    options: ["Việt Nam Nghĩ đoàn", "Hội Phục Việt", "Hội Hưng Nam", "Cộng sản đoàn"],
    answer: "D"
  },
  {
    type: "multiple",
    number: 9,
    question: "Năm 1941, sau khi về nước, Nguyễn Ái Quốc đã chọn nơi nào sau đây để xây dựng thành căn cứ địa cách mạng?",
    options: ["Tân Trào", "Cao Bằng", "Lạng Sơn", "Tuyên Quang"],
    answer: "B"
  },
  {
    type: "multiple",
    number: 10,
    question: "Tháng 6-1945, theo Chỉ thị của Hồ Chí Minh, căn cứ địa cách mạng nào sau đây được thành lập?",
    options: ["Chiến khu D-Tây Ninh", "Căn cứ Bắc Sơn-Võ Nhai", "Trung ương Cục miền Nam", "Khu Giải phóng Việt Bắc"],
    answer: "D"
  },
  {
    type: "multiple",
    number: 11,
    question: "Hoạt động nào sau đây của Nguyễn Ái Quốc ở Pháp trong những năm 1919-1923 đã bước đầu thiết lập mới quan hệ giữa cách mạng Việt Nam với phong trào giải phóng dân tộc thế giới?",
    options: ["Triệu tập Hội nghị hợp nhất các tổ chức cộng sản", "Soạn thảo Chính cương của Đảng Cộng sản Đông Dương", "Tham gia sáng lập Hội Liên hiệp thuộc địa ở Pari", "Soạn thảo Sách lược của Đảng Cộng sản Đông Dương"],
    answer: "C"
  },
  {
    type: "multiple",
    number: 12,
    question: "Trong thời gian ở Quảng Châu (Trung Quốc) từ năm 1924 đến năm 1927, Nguyễn Ái Quốc có hoạt động nào sau đây nhằm chuẩn bị cho bước chuyển biến về chất của phong trào giải phóng dân tộc Việt Nam?",
    options: ["Khởi đầu tạo dựng các mối quan hệ với cách mạng thế giới", "Trực tiếp tạo ra sự phân hóa trong các tổ chức tiền cộng sản", "Trực tiếp truyền bá lí luận cách mạng giải phóng dân tộc", "Bắt đầu xây dựng lí luận cách mạng theo khuynh hướng vô sản"],
    answer: "C"
  },
  {
    type: "multiple",
    number: 13,
    question: "Những hoạt động yêu nước ban đầu của Nguyễn Tất Thành (1911 – 1919) có ý nghĩa quan trọng nào sau đây?",
    options: ["Đặt cơ sở cho việc lựa chọn con đường cứu nước mới sau này", "Xác lập mối quan hệ của cách mạng Việt Nam với các nước tư bản", "Chuẩn bị điều kiện về tổ chức cho sự ra đời của Đảng Cộng sản", "Đặt cơ sở cho việc xác định cuộc tư sản dân quyền cách mạng"],
    answer: "A"
  },
  {
    type: "multiple",
    number: 14,
    question: "“Muốn cứu nước và giải phóng dân tộc, không con đường nào khác ngoài con đường cách mạng vô sản” là quyết định của Nguyễn Ái Quốc khi đọc",
    options: [
      "Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa của Lê-nin",
      "báo Đời sống công nhân, báo Nhân đạo và cuốn Bản án chế độ thực dân Pháp",
      "báo Thanh niên – cơ quan ngôn luận của Hội Việt Nam Cách mạng Thanh niên",
      "Tác phẩm Đường Kách mệnh và các bài viết của Lê-nin đăng trên Tạp chí Thư tín quốc tế"
    ],
    answer: "A"
  },
  {
    type: "multiple",
    number: 15,
    question: "Việc Nguyễn Ái Quốc bỏ phiếu tán thành gia nhập Quốc tế cộng sản và tham gia sáng lập Đảng cộng sản Pháp (12/1920) là mốc đánh dấu",
    options: [
      "sự thiết lập quan hệ giữa Việt Nam với các nước thuộc địa trên thế giới",
      "bước ngoặt quyết định trong cuộc đời hoạt động của Nguyễn Ái Quốc",
      "sự chấm dứt tình trạng khủng hoảng về đường lối cứu nước ở Việt Nam",
      "bước ngoặt quyết định trong tiến trình phát triển của cách mạng Việt Nam"
    ],
    answer: "B"
  },
  {
    type: "multiple",
    number: 16,
    question: "Đầu năm 1930, Nguyễn Ái Quốc triệu tập Hội nghị thành lập Đảng Cộng sản Việt Nam là do",
    options: [
      "phong trào công nhân đã phát triển đến trình độ hoàn toàn tự giác",
      "phong trào cách mạng Việt Nam đứng trước nguy cơ bị chia rẽ lớn",
      "tổng bộ Hội Việt Nam cách mạng thanh niên nêu ra yêu cầu hợp nhất",
      "các tổ chức cộng sản trong nước đề nghị hợp nhất thành một đảng"
    ],
    answer: "B"
  },
  {
    type: "multiple",
    number: 17,
    question: "Tại Hội nghị thành lập Đảng Cộng sản Việt Nam (đầu năm 1930), vai trò nào sau đây của Nguyễn Ái Quốc thể hiện sự vận dụng sáng tạo chủ nghĩa Mác – Lê-nin ở Việt Nam?",
    options: ["Xác định phương hướng tiến lên", "Xác định lực lượng nòng cốt", "Xác định lực lượng cách mạng", "Xác định giai cấp lãnh đạo"],
    answer: "C"
  },
  {
    type: "multiple",
    number: 18,
    question: "Những vấn đề cơ bản về chiến lược và sách lược của cách mạng Việt Nam được Nguyễn Ái Quốc hoạch định hoàn chỉnh trong tài liệu nào sau đây?",
    options: [
      "Cương lĩnh chính trị đầu tiên của Đảng (1930)",
      "Tác phẩm Đường Kách mệnh (1927)",
      "Luận cương chính trị của Đảng (10-1930)",
      "Cuốn Bản án chế độ thực dân Pháp (1925)"
    ],
    answer: "A"
  },
  {
    type: "multiple",
    number: 19,
    question: "Trong quá trình chuẩn bị và lãnh đạo Cách mạng tháng Tám năm 1945, nội dung nào sau đây là vai trò của Nguyễn Ái Quốc để chuẩn bị về lực lượng chính trị",
    options: [
      "Xây dựng và mở rộng căn cứ địa cách mạng",
      "Ra Chỉ thị thành lập Khu giải phóng Việt Bắc",
      "Sáng lập và mở rộng Việt Nam Độc lập Đồng minh",
      "Thành lập Đội Việt Nam Tuyên truyền Giải phóng quân"
    ],
    answer: "C"
  },
  {
    type: "multiple",
    number: 20,
    question: "Hội nghị Ban Chấp hành Trung ương Đảng Cộng sản Đông Dương (5-1941) do Nguyễn Ái Quốc chủ trì xác định nhiệm vụ trực tiếp, trước mắt là",
    options: ["giải phóng giai cấp", "cải cách ruộng đất", "xóa bỏ tàn dư phong kiến", "giải phóng dân tộc"],
    answer: "D"
  },
  {
    type: "multiple",
    number: 21,
    question: "Khi Nhật Bản đầu hàng quân Đồng minh (15-8-1945), Hồ Chí Minh và Đảng Cộng sản Đông Dương đã lãnh đạo nhân dân giành chính quyền bằng hình thức nào sau đây?",
    options: [
      "Sử dụng các lực lượng vũ trang làm nòng cốt trong suốt quá trình khởi nghĩa",
      "Kết hợp lực lượng ba thứ quân trong tổng tiến công và nổi dậy trên toàn quốc",
      "Tổng khởi nghĩa trong cả nước trước khi Nhật Bản đầu hàng quân Đồng minh",
      "Tổng khởi nghĩa trong cả nước trước khi quân Đồng minh vào Đông Dương"
    ],
    answer: "D"
  },
  {
    type: "multiple",
    number: 22,
    question: "Chủ tịch Hồ Chí Minh cùng Trung ương Đảng Lao động Việt Nam đã hoạch định đường lối chiến lược cho cách mạng miền Nam thời kì 1954-1975 là",
    options: [
      "tiếp tục hoàn thành cuộc cách mạng dân tộc dân chủ nhân dân",
      "hoàn thành cuộc cách mạng ruộng đất và khôi phục kinh tế",
      "Tiến lên xây dựng chủ nghĩa xã hội, hàn gắn vết thương chiến tranh",
      "hoàn thành giải phóng miền Nam, thống nhất đất nước"
    ],
    answer: "A"
  },
  {
    type: "multiple",
    number: 23,
    question: "Trong quá trình lãnh đạo Cách mạng tháng Tám 1945, Hồ Chí Minh và Đảng Cộng sản Đông Dương đã",
    options: ["tận dụng thời cơ để đẩy lùi nguy cơ", "kết hợp đấu tranh chính trị và ngoại giao", "tiến hành tổng tiến công và nổi dậy", "tổng khởi nghĩa từ khi Nhật đảo chính Pháp"],
    answer: "A"
  },
  {
    type: "multiple",
    number: 24,
    question: "Thành công của Cách mạng tháng Tám 1945 ở Việt Nam do Chủ tịch Hồ Chí Minh và ĐCS Đông Dương lãnh đạo đã",
    options: [
      "làm phá sản chiến lược toàn cầu của Mỹ",
      "xoá bỏ được mọi tàn dư của chế độ phong kiến",
      "xoá bỏ chủ nghĩa thực dân mới trên thế giới",
      "khai sinh ra nước Việt Nam Dân chủ Cộng hoà"
    ],
    answer: "D"
  },
  {
    type: "multiple",
    number: 25,
    question: "Trong việc giải quyết mối quan hệ Việt – Pháp (từ đầu tháng 3 đến trước ngày 19-12-1946), Chủ tịch Hồ Chí Minh và Ban Thường vụ Trung ương Đảng đã",
    options: [
      "thực hiện chủ trương “hòa để tiến”",
      "nhận viện trợ của các nước xã hội chủ nghĩa",
      "đối đầu quân sự với thực dân Pháp",
      "từ chối thiết lập quan hệ với phương Tây"
    ],
    answer: "A"
  },
  {
    type: "multiple",
    number: 26,
    question: "Nội dung nào sau đây phản ánh đúng vai trò của Chủ tịch Hồ Chí Minh đối với Đảng Cộng sản Việt Nam?",
    options: ["Xác định con đường phát triển", "Định hướng xây dựng tổ chức", "Sáng lập, lãnh đạo và rèn luyện", "Kế thừa, tổ chức và phát triển"],
    answer: "C"
  },
  {
    type: "multiple",
    number: 27,
    question: "Trong những năm kháng chiến chống thực dân Pháp (1945-1954), Chủ tịch Hồ Chí Minh có vai trò nổi bật nào sau đây?",
    options: [
      "Đề ra kế hoạch Tổng tiến công và nổi dậy Xuân Mậu thân",
      "Hoạch định đường lối xây dựng và bảo vệ chế độ mới",
      "Trực tiếp chỉ đạo xây dựng chủ nghĩa xã hội ở miền Bắc",
      "Chủ trì Đại hội đại biểu toàn quốc lần thứ III của Đảng"
    ],
    answer: "B"
  },
  {
    type: "multiple",
    number: 28,
    question: "Việc học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh được Đảng và Nhà nước Việt Nam xác định gắn với quá trình",
    options: [
      "mở rộng quan hệ ngoại giao với các nước trên thế giới",
      "nâng cao chất lượng giáo dục và đào tạo nguồn nhân lực",
      "phát triển các khu công nghiệp và khu chế xuất hiện đại",
      "xây dựng và phát triển cơ sở hạ tầng giao thông hiện đại"
    ],
    answer: "B"
  },
  {
    type: "multiple",
    number: 29,
    question: "Tháng 11-2006, Bộ Chính trị Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam đã ban hành Chỉ thị số 06-CT/TW, tổ chức cuộc vận động “Học tập và làm theo tấm gương đạo đức Hồ Chí Minh” nhằm",
    options: [
      "phát huy giá trị to lớn của tư tưởng, đạo đức Hồ Chí Minh",
      "thúc đẩy sự phát triển nhanh chóng của nền kinh tế thị trường",
      "xây dựng cơ sở hạ tầng giao thông đồng bộ và hiện đại",
      "cải thiện hệ thống giáo dục và đào tạo, nâng cao dân trí"
    ],
    answer: "A"
  },
  {
    type: "multiple",
    number: 30,
    question: "Chủ tịch Hồ Chí Minh “sống mãi” trong lòng nhân dân Việt Nam vì lí do nào sau đây?",
    options: [
      "Hồ Chí Minh đã thực hiện nhiều chuyến thăm nước ngoài nhất",
      "Ông là người duy nhất lãnh đạo Việt Nam trong suốt thế kỷ 20",
      "Tư tưởng Hồ Chí Minh đã trở thành tài sản vô giá của toàn dân tộc",
      "Hồ Chí Minh đã sáng tác nhiều tác phẩm văn học nổi tiếng toàn cầu"
    ],
    answer: "C"
  },
  {
    type: "multiple",
    number: 31,
    question: "Trong cuộc hành trình tìm đường cứu nước (1911 – 1920), nhận thức nào sau đây của Nguyễn Tất Thành có sự khác biệt so với các nhà yêu nước đi trước?",
    options: [
      "Chỉ có đoàn kết mới đánh đuổi được đế quốc, giải phóng dân tộc thoát khỏi áp bức",
      "Muốn cứu nước và giải phóng dân tộc phải đi theo khuynh hướng cách mạng vô sản",
      "Mâu thuẫn hàng đầu trong xã hội Việt Nam là giữa toàn thể dân tộc với đế quốc Pháp",
      "Muốn cứu nước và giải phóng dân tộc, trước tiên phải trở thành một người yêu nước"
    ],
    answer: "B"
  },
  {
    type: "multiple",
    number: 32,
    question: "Sự kiện bản Yêu sách của nhân dân An Nam không được Hội nghị Vécxai chấp nhận (tháng 6-1919) để lại bài học kinh nghiệm nào sau đây cho phong trào giải phóng dân tộc Việt Nam?",
    options: [
      "Các diễn đàn quốc tế không thể giải quyết được vấn đề dân tộc",
      "Không để các vấn đề dân tộc lệ thuộc vào lực lượng bên ngoài",
      "Muốn giải phóng dân tộc chỉ có thể dựa vào giai cấp vô sản thế giới",
      "Để giải phóng dân tộc không được dựa vào sự giúp đỡ của bên ngoài"
    ],
    answer: "B"
  },
  {
    type: "multiple",
    number: 33,
    question: "Con đường cứu nước của dân tộc Việt Nam do Nguyễn Ái Quốc xác định có sự khác biệt hoàn toàn so với các con đường cứu nước trước đó về điểm nào sau đây?",
    options: ["Hình thức, phương pháp đấu tranh", "Mục tiêu trực tiếp, trước mắt", "Xác định đối tượng cách mạng", "Phương hướng tiến lên"],
    answer: "D"
  },
  {
    type: "multiple",
    number: 34,
    question: "Lí luận giải phóng dân tộc của Nguyễn Ái Quốc có giá trị nào sau đây đối với lịch sử Việt Nam trong những năm 20 của thế kỷ XX?",
    options: [
      "Làm cho phong trào yêu nước chuyển hẳn sang quỹ đạo cách mạng vô sản",
      "Chấm dứt tình trạng khủng hoảng về đường lối cứu nước đầu thế kỷ XX",
      "Tạo cơ sở cho sự hình thành phong trào dân tộc theo khuynh hướng vô sản",
      "Trực tiếp chuẩn bị đầy đủ những điều kiện cho sự ra đời của Đảng Cộng sản"
    ],
    answer: "C"
  },
  {
    type: "multiple",
    number: 35,
    question: "Nội dung nào sau đây nhận định sai về ý nghĩa ra đời của Đảng Cộng sản Việt Nam?",
    options: [
      "Là kết quả cuộc đấu tranh dân tộc và giai cấp trong những năm 20 của thế kỉ XX",
      "Là sự kết hợp giữa phong trào cộng sản quốc tế và tư tưởng dân chủ tư sản phương Tây",
      "Có sự kết hợp chặt chẽ giữa chủ nghĩa Mác – Lê-nin và tư tưởng Nguyễn Ái Quốc",
      "Kết hợp phong trào công nhân và phong trào yêu nước Việt Nam trong thời kì mới"
    ],
    answer: "B"
  },
  {
    type: "multiple",
    number: 36,
    question: "Trong những năm 1945-1946, Chính phủ Việt Nam Dân chủ Cộng hòa và Chủ tịch Hồ Chí Minh đã thực hiện một trong những biện pháp nào sau đây nhằm bảo vệ chế độ mới?",
    options: [
      "Xây dựng thế trận lòng dân làm nền tảng sức mạnh kháng chiến, kiến quốc",
      "Kiên quyết không nhân nhượng với kẻ thù để giữ vững thành quả cách mạng",
      "Tạm gác nhiệm vụ chống nội phản để tập trung tối đa đối phó với ngoại xâm",
      "Kết hợp xây dựng thực lực toàn diện với tận dụng nguồn viện trợ từ bên ngoài"
    ],
    answer: "A"
  },
  {
    type: "multiple",
    number: 37,
    question: "Tài liệu nào sau đây lần đầu tiên khẳng định sự nhân nhượng của nhân dân Việt Nam đối với thực dân Pháp xâm lược đã đến giới hạn cuối cùng?",
    options: [
      "“Kháng chiến nhất định thắng lợi” của Tổng bí thư Trường Chinh",
      "“Tuyên ngôn độc lập” của nước Việt Nam dân chủ cộng hòa",
      "Chỉ thị thành lập đội Việt Nam tuyên truyền Giải phóng quân",
      "“Lời kêu gọi toàn quốc kháng chiến” của chủ tịch Hồ Chí Minh"
    ],
    answer: "D"
  },
  {
    type: "multiple",
    number: 38,
    question: "Việc Chủ tịch Hồ Chí Minh đẩy mạnh hoạt động ngoại giao với nhân dân Pháp tiến bộ, Trung Quốc, Liên Xô và các nước Đông Âu (1949 – 1950) đem lại tác dụng nào sau đây?",
    options: [
      "Tranh thủ được sự ủng hộ, giúp đỡ của các nước đối với cuộc kháng chiến",
      "Đặt cơ sở cho Việt Nam gia nhập Hiệp hội các quốc gia Đông Nam Á",
      "Buộc Chính phủ Trung Hoa Dân quốc rút hết quân ra khỏi Việt Nam",
      "Tạo điều kiện thuận lợi để miền Bắc Việt Nam đi lên chủ nghĩa xã hội"
    ],
    answer: "A"
  },
  {
    type: "multiple",
    number: 39,
    question: "Nội dung nào sau đây ghi nhận Hồ Chí Minh là nhà lãnh đạo chủ chốt trong lịch sử dân tộc (từ năm 1945 đến năm 1969)?",
    options: [
      "Chủ trì các hội nghị của Đảng, hoạch định đường lối cách mạng",
      "Chỉ huy các chiến dịch trong suốt cuộc kháng chiến chống Mỹ",
      "Kết nối phong trào cách mạng Việt Nam với cách mạng thế giới",
      "Trực tiếp chỉ đạo cuộc Tổng tiến công và giải phóng Xuân năm 1975"
    ],
    answer: "A"
  },
  {
    type: "multiple",
    number: 40,
    question: "Yếu tố nào sau đây đã góp phần tạo nên “đạo đức, trí tuệ, nhân cách” và sự nghiệp vĩ đại của Chủ tịch Hồ Chí Minh?",
    options: [
      "Quá trình học tập và sự tiếp thu tri thức không ngừng",
      "Sự tham gia vào các phong trào cách mạng quốc tế",
      "Kinh nghiệm lãnh đạo và chiến đấu cách mạng",
      "Những năm tháng trải qua khó khăn trong cuộc sống"
    ],
    answer: "A"
  },
  {
    type: "multiple",
    number: 41,
    question: "Nội dung nào sau đây phản ánh đúng vai trò của Chủ tịch Hồ Chí Minh trong cuộc kháng chiến chống Mỹ, cứu nước (1954-1975)?",
    options: [
      "Là biểu tượng đoàn kết dân tộc",
      "Lãnh đạo phong trào “Đồng khởi”",
      "Trực tiếp chỉ huy các chiến dịch lớn",
      "Đàm phán, kí kết Hiệp định Pari"
    ],
    answer: "A"
  },
  {
    type: "truefalse",
    number: 42,
    question: "Cho đoạn tư liệu sau đây",
    passage: "“Sinh ra và lớn lên trong bối cảnh đất nước đã trở thành thuộc địa, nhân dân phải chịu cuộc sống lầm than, tiếp thu truyền thống yêu nước của dân tộc, gia đình và quê hương, Nguyễn Tất Thành sớm có ý chí đánh đuổi thực dân Pháp, giải phóng đồng bào. Tuy rất khâm phục tinh thần yêu nước của các bậc tiền bối, nhưng Người không tán thành những con đường của họ mà quyết tâm ra đi tìm một con đường cứu nước mới. Nguyễn Tất Thành hướng trời Tây, nơi có khoa học kĩ thuật phát triển và những tư tưởng dân chủ tự do, để tìm hiểu xem nước Pháp và các nước khác làm thế nào, rồi trở về giúp đồng bào”.",
    statements: [
      { label: "a", text: "Đoạn trích thông tin Nguyễn Tất Thành quyết tâm sang phương Tây tìm đường cứu nước.", answer: true },
      { label: "b", text: "Nguyễn Tất Thành tìm con đường cứu nước mới vì không tán thành chủ trương cứu nước của các bậc tiền bối.", answer: true },
      { label: "c", text: "Việc Nguyễn Tất Thành ra đi tìm đường cứu nước (1911) báo hiệu phong trào giải phóng dân tộc Việt Nam đã đi theo con đường cách mạng vô sản.", answer: false },
      { label: "d", text: "Điểm mới và độc đáo trong quyết định ra đi tìm đường cứu nước của Nguyễn Tất Thành (1911) là việc xác định mục đích và lựa chọn hướng đi.", answer: true }
    ]
  },
  {
    type: "truefalse",
    number: 43,
    question: "Cho đoạn tư liệu sau đây",
    passage: "“Bài đó [Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa của Lê-nin] khó hiểu, vì có những từ ngữ mà tôi không biết rõ. Nhưng tôi đọc đi đọc lại, và dần dần tôi hiểu ý nghĩa của nó một cách sâu sắc. Luận cương của Lê-nin làm cho tôi rất cảm động, phấn khởi, sáng tỏ, tin tưởng biết bao. Tôi vui mừng đến phát khóc lên. Ngồi một mình trong buồng mà tôi nói to lên như đang nói trước quần chúng đông đảo: “Hỡi đồng bào bị đọa đày đau khổ! Đây là cái cần thiết cho chúng ta, đây là con đường giải phóng chúng ta! Từ đó tôi hoàn toàn tin theo Lê-nin, tin theo Quốc tế thứ ba”.”",
    statements: [
      { label: "a", text: "Đoạn tư liệu mô tả cảm xúc của Nguyễn Ái Quốc khi đọc sơ thảo Luận cương về vấn đề dân tộc và vấn đề thuộc địa của Lê-nin.", answer: true },
      { label: "b", text: "Cụm từ “đây là con đường giải phóng chúng ta” trong đoạn tư liệu trên chính là con đường cứu nước theo khuynh hướng cách mạng vô sản.", answer: true },
      { label: "c", text: "Lúc đầu, chính là chủ nghĩa yêu nước, chứ chưa phải là chủ nghĩa cộng sản đã đưa Nguyễn Ái Quốc đến với Chủ nghĩa Lê-nin, tin theo Quốc tế thứ ba.", answer: true },
      { label: "d", text: "Sự kiện Nguyễn Ái Quốc tìm được con đường cứu nước theo khuynh hướng cách mạng vô sản đã chấm dứt thời kì khủng hoảng đường lối cứu nước, giải phóng dân tộc ở Việt Nam.", answer: false }
    ]
  },
  {
    type: "truefalse",
    number: 44,
    question: "Cho đoạn tư liệu sau đây",
    passage: "“Nhận thấy Chủ tịch Hồ Chí Minh, một biểu tượng xuất sắc về sự tự khẳng định dân tộc, đã cống hiến trọn đời mình cho sự nghiệp giải phóng dân tộc của nhân dân Việt Nam, góp phần vào cuộc đấu tranh chung của các dân tộc vì hòa bình, độc lập dân tộc, dân chủ và tiến bộ xã hội.\nNhận thấy những đóng góp quan trọng về nhiều mặt của Chủ tịch Hồ Chí Minh trên các lĩnh vực văn hoá, giáo dục, nghệ thuật chính là sự kết tinh của truyền thống văn hóa hàng nghìn năm của dân tộc Việt Nam, và những tư tưởng của Người là hiện thân của những khát vọng của các dân tộc mong muốn được khẳng định bản sắc văn hoá của mình và mong muốn tăng cường sự hiểu biết lẫn nhau giữa các dân tộc”.”",
    statements: [
      { label: "a", text: "Chủ tịch Hồ Chí Minh tham gia trực tiếp vào cuộc đấu tranh của tất cả các dân tộc vì hòa bình, độc lập dân tộc, dân chủ và tiến bộ xã hội.", answer: false },
      { label: "b", text: "UNESCO tôn vinh Chủ tịch Hồ Chí Minh vì đã trực tiếp đóng góp vào sự nghiệp xây dựng nền văn hoá của mọi quốc gia trên thế giới.", answer: false },
      { label: "c", text: "Chủ tịch Hồ Chí Minh được tôn vinh là “Anh hùng giải phóng dân tộc và Danh nhân văn hoá thế giới” vì có vai trò to lớn đối với Việt Nam và góp phần khẳng định bản sắc văn hoá các dân tộc trên thế giới.", answer: true },
      { label: "d", text: "Thế giới tôn vinh Chủ tịch Hồ Chí Minh thể hiện sự trân trọng về tư tưởng, hành động và nhân cách cao thượng của Chủ tịch Hồ Chí Minh, được các tổ chức quốc tế và nhân dân các nước thừa nhận.", answer: true }
    ]
  },
  {
    type: "truefalse",
    number: 45,
    question: "Cho đoạn tư liệu sau đây",
    passage: "“Ở nước Việt Nam Dân chủ Cộng hoà, chúng tôi đã được nghe, được thấy và được học tập nhiều bài học về con người và cách mạng. Song, chúng tôi vẫn cảm thấy thiếu, nếu như không được gặp người tượng trưng cho cả dân tộc. Đó là Chủ tịch Hồ Chí Minh... Trong khi Chủ tịch nói, chúng tôi hiểu rằng người đang ở trước mặt mình đây chính là người đã cùng một số người khác sáng lập ra Đảng Cộng sản, là người bị tù đày, truy nã, sống trong hang, là người tổ chức đấu tranh để giải phóng Tổ quốc. Chủ tịch Hồ Chí Minh là lịch sử, là người suốt đời gắn bó với cách mạng. Cuộc đời mẫu mực và nếp sống giản dị của Chủ tịch đã khắc sâu vào tâm trí chúng tôi. Tinh thần quyết tâm của Chủ tịch Hồ Chí Minh thể hiện rõ trong những câu nói ngắn gọn và sáng sủa, chứa đựng sự dũng cảm và anh hùng của các thế hệ kiểu mẫu của nước Việt Nam Dân chủ Cộng hoà trên mặt trận bảo vệ đất nước cũng như trong công cuộc xây dựng chủ nghĩa xã hội”.”",
    statements: [
      { label: "a", text: "Chủ tịch Hồ Chí Minh là người tham gia sáng lập Quốc tế Cộng sản, Đảng Cộng sản Việt Nam và có đóng góp tích cực vào phong trào giải phóng dân tộc trên thế giới.", answer: false },
      { label: "b", text: "Chủ tịch Hồ Chí Minh được nhân dân thế giới yêu quý vì lối sống giản dị, tấm gương đạo đức mẫu mực cũng như sự hi sinh vì độc lập tự do cho dân tộc Việt Nam.", answer: true },
      { label: "c", text: "Chủ tịch Hồ Chí Minh là biểu tượng của cuộc đấu tranh giải phóng dân tộc ở Việt Nam cũng như đại diện cho khát vọng giải phóng của nhân loại.", answer: true },
      { label: "d", text: "Chủ tịch Hồ Chí Minh được quốc tế tôn vinh vì đã trực tiếp tham gia đấu tranh giải phóng dân tộc và xây dựng chủ nghĩa xã hội trên phạm vi toàn thế giới.", answer: false }
    ]
  },
  {
    type: "truefalse",
    number: 46,
    question: "Đọc đoạn tư liệu sau",
    passage: "“Xứ Đông Dương bị chủ nghĩa tư bản Pháp bóc lột để làm giàu cho một số cá mập! Người ta đưa người Đông Dương vào chỗ chết trong cuộc chém giết của bọn tư bản để bảo vệ những cái gì mà chính họ cũng không hề biết. Người ta đầu độc họ bằng rượu cồn và thuốc phiện. Người ta kìm họ trong ngu dốt…”",
    statements: [
      { label: "a", text: "Hồ Chí Minh đề cập đến việc xứ Đông Dương đã bị Chủ nghĩa tư bản Pháp tiến hành 2 cuộc khai thác bóc lột.", answer: true },
      { label: "b", text: "Hồ Chí Minh đề cập đến việc xứ Đông Dương đã bị Chủ nghĩa tư bản Pháp tiến hành khai thác bóc lột 3 lần trong vòng 30 năm.", answer: false },
      { label: "c", text: "Trong các cuộc khai thác bóc lột mà Hồ Chí Minh đề cập đến trong đoạn tư liệu thì chủ nghĩa tư bản Pháp tập trung chủ yếu vào kinh tế đồng thời áp đặt văn hoá xã hội.", answer: true },
      { label: "d", text: "Trong quá trình khai thác bóc lột, Hồ Chí Minh đề cập đến việc chủ nghĩa tư bản Pháp chú trọng nhất về vấn đề văn hoá nhằm làm cho người thuộc địa trở thành nô lệ.", answer: false }
    ]
  },
  {
    type: "truefalse",
    number: 47,
    question: "Đọc đoạn tư liệu sau",
    passage: "“Xứ Đông Dương bị chủ nghĩa tư bản Pháp bóc lột để làm giàu cho một số cá mập! Người ta đưa người Đông Dương vào chỗ chết trong cuộc chém giết của bọn tư bản để bảo vệ những cái gì mà chính họ cũng không hề biết. Người ta đầu độc họ bằng rượu cồn và thuốc phiện. Người ta kìm họ trong ngu dốt…”",
    statements: [
      { label: "a", text: "Nguyễn Ái Quốc tìm đường cứu nước khi thực dân Pháp tiến hành cuộc khai thác thuộc địa cuối thế kỷ XIX.", answer: true },
      { label: "b", text: "Nguyễn Ái Quốc tố cáo thực dân Pháp nhằm kêu gọi nhân dân đứng lên đấu tranh.", answer: true },
      { label: "c", text: "Nguyễn Ái Quốc vạch trần bản chất của chủ nghĩa đế quốc Pháp nhằm thức tỉnh nhân dân.", answer: true },
      { label: "d", text: "Nguyễn Ái Quốc đã sớm có điều kiện tiếp thu tư tưởng mới của thời đại và tìm ra con đường cứu nước.", answer: false }
    ]
  },
  {
    type: "truefalse",
    number: 48,
    question: "Đọc đoạn tư liệu sau",
    passage: "“Nghệ An núi cao, sông sâu, phong tục trọng hậu, cảnh tượng tươi sáng, gọi là đất có danh tiếng hơn cả Nam Châu. Người thì thuần hoá mà chăm học, sản vật thì nhiều thức quý của lạ... được khí tốt của sông núi nên sinh ra nhiều bậc danh hiền... thực là nơi hiểm yếu như thành đồng, ao nóng của nước và là then khoá của các triều đại”.”",
    statements: [
      { label: "a", text: "Chủ tịch Hồ Chí Minh được sinh ra ở mảnh đất anh hùng.", answer: true },
      { label: "b", text: "Chủ tịch Hồ Chí Minh được sinh ra ở mảnh đất hiếu học.", answer: true },
      { label: "c", text: "Chủ tịch Hồ Chí Minh được sinh ra ở mảnh đất giàu có nhất.", answer: false },
      { label: "d", text: "Chủ tịch Hồ Chí Minh được sinh ra ở quê hương cách mạng.", answer: true }
    ]
  },
  {
    type: "truefalse",
    number: 49,
    question: "Đọc đoạn tư liệu sau",
    passage: "“Không có vẻ kiêu kỳ, không có gì ngạo mạn trong lời nói, mà chỉ thấy niềm tin mãnh liệt vào nhân dân… Chưa bao giờ chúng tôi thấy sự giản dị và vĩ đại đi liền với nhau như vậy. Chưa bao giờ một con người khi nói với chúng tôi về các em nhỏ lại giáo dục chúng tôi nhiều như vậy. Tư tưởng và lời nói của Chủ tịch chứa đựng sự đau thương và anh dũng của cả một dân tộc đã làm nên lịch sử của mình. Nhưng sự dịu hiền toả ra từ những lời nói chỉ có ở Chủ tịch Hồ Chí Minh!”",
    statements: [
      { label: "a", text: "Đoạn tư liệu cho thấy đức tính giản dị và gần gũi của Bác ngay cả khi gặp gỡ khách quốc tế.", answer: true },
      { label: "b", text: "Đoạn tư liệu cho thấy sức cảm hoá lớn đối với người khác của Chủ tịch Hồ Chí Minh.", answer: true },
      { label: "c", text: "Đoạn tư liệu đã cho thấy sự kính trọng của nhân vật đối với Chủ tịch Hồ Chí Minh.", answer: true },
      { label: "d", text: "Đoạn tư liệu khẳng định mọi người đều cảm nhận được lòng yêu nước thương dân của Chủ tịch Hồ Chí Minh.", answer: false }
    ]
  },
  {
    type: "truefalse",
    number: 50,
    question: "Đọc đoạn tư liệu sau",
    passage: "“Nhân dân Việt Nam, trong đó có ông cụ thân sinh ra tôi, lúc này thường tự hỏi nhau ai sẽ là người giúp mình thoát khỏi ách thống trị của Pháp. Người này nghĩ là Anh, có người lại cho là Mĩ. Tôi thấy phải đi ra nước ngoài xem cho rõ”.”",
    statements: [
      { label: "a", text: "Cuộc đời và sự nghiệp của Chủ tịch Hồ Chí Minh chịu ảnh hưởng bởi yếu tố gia đình.", answer: true },
      { label: "b", text: "Cuộc đời và sự nghiệp của Chủ tịch Hồ Chí Minh chịu ảnh hưởng bởi yếu tố cá nhân.", answer: true },
      { label: "c", text: "Cuộc đời và sự nghiệp của Chủ tịch Hồ Chí Minh chịu ảnh hưởng bởi yếu tố kinh tế.", answer: false },
      { label: "d", text: "Cuộc đời và sự nghiệp của Chủ tịch Hồ Chí Minh chịu ảnh hưởng bởi yếu tố quê hương.", answer: true }
    ]
  }
];
