export const CATEGORIES = [
  { id: "all", label: "Tất cả" },
  { id: "edutainment", label: "Giáo dục trải nghiệm" },
  { id: "physical", label: "Vận động thể chất" },
  { id: "skills", label: "Kỹ năng sống" },
  { id: "relaxation", label: "Thư giãn" },
  { id: "people", label: "Con người" },
];

// Đã loại bỏ hoàn toàn khối export interface Destination của TypeScript tại đây

export const DESTINATIONS = [
  {
    id: "eco-farm",
    category: "edutainment",
    categoryLabel: "Giáo dục trải nghiệm",
    categoryColor: "bg-primary text-primary-foreground",
    title: "Nông trại Sinh thái & Thực nghiệm Green Park Củ Chi",
    subtitle: "Cho con rũ bỏ màn hình, chạm tay vào đất bùn quê hương",
    excerpt:
      "Con sẽ khoác lên mình chiếc áo bà ba mộc mạc, đội nón lá, rũ bỏ hoàn toàn ranh giới của một đứa trẻ đô thị để hòa mình trọn vẹn vào thiên nhiên đất bùn.",
    body: [
      "Bố mẹ có biết, giá trị lớn nhất giữ chân các bạn nhỏ chính là tính chân thật của trải nghiệm? Việc con được trực tiếp lội bùn, cấy lúa, tát mương bắt cá thật mang lại giá trị cảm xúc rất lớn, vượt trội hơn hẳn các bảo tàng hay công viên giải trí nhân tạo.",
      "Tại nông trại sinh thái này, con sẽ học cách xuống ruộng cấy từng cây lúa, tự tay thu hoạch nấm, hái rau sạch, gieo hạt và tưới nước. Tiếng cười sẽ vang lên giòn tan khi con cùng bạn bè lội ao tát mương bắt cá hay tự tay cho những bạn cừu, dê, thỏ ăn.",
      "Hành trình lấm lem này giúp con hiểu sâu sắc về chuỗi sản xuất nông nghiệp, bồi dưỡng tình yêu thiên nhiên và biết trân quý sức lao động của người nông dân.",
    ],
    highlights: [
      "Trải nghiệm hóa thân thành \"Nông dân nhí\" với áo bà ba và nón lá truyền thống",
      "Thực nghiệm nông nghiệp: xuống ruộng cấy lúa, gieo hạt, tưới nước và thu hoạch rau nấm",
      "Hoạt động lội ao tát mương bắt cá dân dã đầy phấn khích",
      "Gần gũi và tương tác trực tiếp khi cho cừu, dê, thỏ ăn",
    ],
    note:
      "Chuẩn bị 1-2 bộ quần áo dự phòng, khăn tắm và kem chống nắng. Thuê trang phục bà ba chỉ 30.000 VNĐ/bộ.",
    image: "/images/10.png",
    type: "activity",
  },
  {
    id: "sasuke",
    category: "physical",
    categoryLabel: "Vận động thể chất",
    categoryColor: "bg-[#5B8A3C] text-white",
    title: "Chuỗi Thử Thách Vận Động Thể Chất Sasuke",
    subtitle: "Nơi con rèn luyện sức bền, bứt phá sự dẻo dai và lòng kiên trì",
    excerpt:
      "Không gian rèn luyện thể chất năng động ngoài trời, giúp đánh thức sức bền, độ khéo léo và thúc đẩy ý chí vượt qua khó khăn của cá nhân con.",
    body: [
      "Nếu bố mẹ lo lắng con lười vận động hoặc quá rụt rè, chuỗi thử thách Sasuke Green Park sẽ là nơi con bứt phá giới hạn của bản thân.",
      "Các con sẽ được thử sức đối mặt với những chướng ngại vật liên hoàn được bài trí khoa học: từ đi cầu khỉ chông chênh, chui qua lốp xe cho đến vượt rào lưới đầy kịch tính. Những tiếng reo hò cổ vũ của đồng đội sẽ tiếp thêm động lực cho con tham gia đi cầu lắc, đi dây qua kênh, kéo co hay nhảy bao bố.",
      "Trải nghiệm này không chỉ giúp con cải thiện khả năng giữ thăng bằng thể chất mà còn xây dựng tính tự lập và thúc đẩy tinh thần đồng đội mạnh mẽ.",
    ],
    highlights: [
      "Thử thách Sasuke liên hoàn kịch tính: đi cầu khỉ, chui lốp xe, vượt rào lưới",
      "Trò chơi rèn luyện sự khéo léo và thăng bằng: đi cầu lắc, đi dây qua kênh",
      "Các hoạt động tập thể sôi động gắn kết bạn bè: kéo co, nhảy bao bố",
    ],
    note:
      "Trang bị giày thể thao mềm hoặc có độ chống trơn trượt tốt. Tất cả trò chơi vận động đã bao gồm trong vé vào cổng phổ thông (60.000 – 70.000 VNĐ/khách).",
    image: "/images/11.png",
    type: "activity",
  },
  {
    id: "life-skills",
    category: "skills",
    categoryLabel: "Kỹ năng sống & Bảo tồn văn hóa",
    categoryColor: "bg-[#8B6914] text-white",
    title: "Hành Trình Kỹ Năng Sống & Workshop Văn Hóa Nam Bộ",
    subtitle: "Nuôi dưỡng tư duy logic và tình yêu nét đẹp truyền thống dân gian",
    excerpt:
      "Một hành trình ý nghĩa kết hợp giữa rèn luyện tư duy phản biện sắc bén và gìn giữ, trải nghiệm trực quan các giá trị văn hóa ẩm thực Nam Bộ.",
    body: [
      "At phân khu Kỹ năng sống & Hoạt động nhóm, các con sẽ bước vào trò chơi tìm kho báu giải mã mật thư vô cùng kịch tính, đòi hỏi khả năng tư duy logic, phản biện dưới áp lực thời gian.",
      "Con sẽ học được cách làm việc nhóm, biết lắng nghe, phân công công việc và cùng bạn bè chèo xuồng trên kênh, đua ghe thuyền mộc mạc.",
      "Sau những giây phút vận động trí não, con sẽ được thả lỏng tâm hồn tại không gian workshop văn hóa: tự tay học đổ những chiếc bánh khọt truyền thống vàng ruộm, làm bắp rang bơ, tham quan suối cá Koi, tìm hiểu cách trồng phong lan và cười thả ga với các trò chơi dân gian như bịt mắt bắt vịt, bắt gà.",
    ],
    highlights: [
      "Trò chơi tìm kho báu giải mã mật thư rèn luyện tư duy logic dưới áp lực thời gian",
      "Trải nghiệm tinh thần đồng đội qua chèo xuồng trên kênh và đua ghe thuyền",
      "Tự tay thực hành làm bánh khọt truyền thống và làm bắp rang bơ thơm lừng",
      "Trò chơi dân gian vui nhộn: bịt mắt bắt vịt, bắt gà",
      "Khám phá suối cá Koi và vườn hoa phong lan",
    ],
    note:
      "Thuê thuyền dạo hồ: 50.000 VNĐ/chiếc (3–5 khách). Vé phân khu Suối Thơ check-in: 35.000 VNĐ/lượt.",
    image: "/images/12.png",
    type: "activity",
  },
  {
    id: "water-cafe",
    category: "relaxation",
    categoryLabel: "Thư giãn & Giải trí",
    categoryColor: "bg-[#1E6B8C] text-white",
    title: "Phân Khu Tương Tác Nước & Tiệm Cà Phê Bình Yên Cho Gia Đình",
    subtitle: "Giải tỏa áp lực học tập, tìm lại những phút giây thư thái giữa thiên nhiên",
    excerpt:
      "Khi các con thỏa thích reo hò dưới làn nước mát lành để tái tạo năng lượng, bố mẹ có thể lui về một góc nhỏ lãng mạn để nuông chiều bản thân.",
    body: [
      "Sau một ngày dài mải miết trải nghiệm làm nông dân và vượt thử thách Sasuke, không gì tuyệt vời hơn là được xả hết mọi áp lực học tập bằng hoạt động tắm mưa tập thể vô cùng sảng khoái.",
      "Làn nước mát lạnh từ hệ thống tắm mưa cùng khu vực hồ bơi dành riêng cho trẻ em an toàn sẽ mang lại cho con những tiếng cười sảng khoái nhất.",
      "Trong lúc các con đang vui chơi tự do, bố mẹ có thể ghé qua \"Tiệm cà phê bình yên\" nằm ẩn mình giữa thiên nhiên xanh mát tại địa chỉ 83/21 Nguyễn Kim Cương. Tiệm phục vụ các loại cà phê và đồ uống mát lạnh từ 07:00 đến 21:30 hàng ngày.",
    ],
    highlights: [
      "Hoạt động tắm mưa tập thể độc đáo giúp con giải tỏa căng thẳng",
      "Khu vực hồ bơi trẻ em mát lành, an toàn được thiết kế dành riêng cho học sinh",
      "Không gian \"Tiệm cà phê bình yên\" tĩnh lặng giữa thiên nhiên dành cho bố mẹ",
      "Thực đơn đồ uống mát lạnh đa dạng từ 07:00 – 21:30",
    ],
    note: "Vé hồ bơi trẻ em tự do chỉ 25.000 VNĐ/lượt. Khu dã ngoại mở cửa từ 07:30 – 18:00 hàng ngày.",
    image: "/images/13.png",
    type: "activity",
  },
  {
    id: "green-park-overview",
    category: "people",
    categoryLabel: "Con người",
    categoryColor: "bg-secondary text-secondary-foreground border border-primary/30",
    title: "Green Park Củ Chi: \"Vùng đệm xanh\" lý tưởng cho hành trình rời phố về vườn",
    subtitle: "Ốc đảo sinh thái trong lành tách biệt khói bụi, đánh thức mọi giác quan của tuổi thơ",
    excerpt:
      "Giữa dòng chảy đô thị hóa sôi động, có một khoảng trời bình yên uốn mình bên những cánh đồng lúa xanh ngát, sẵn sàng dang tay ôm lấy con vào lòng thiên nhiên mộc mạc.",
    body: [
      "Khu dã ngoại Green Park Củ Chi tọa lạc ở phía Tây Bắc Thành phố Hồ Chí Minh, cách khu vực trung tâm đô thị khoảng 25–26,9 km tùy theo tuyến đường. Bố mẹ chỉ mất từ 1 tiếng 30 phút đến 1 tiếng 33 phút di chuyển để đưa con đến một thế giới hoàn toàn khác.",
      "Địa chỉ cập nhật theo Nghị quyết số 1685/NQ-UBTVQH15: 83/13 và 83/21, Đường Nguyễn Kim Cương, Ấp 10, Xã Phú Hòa Đông, TP.HCM.",
      "Thời điểm đẹp nhất để ghé thăm: Sáng Chủ nhật, đến sớm trước 8h để có trải nghiệm tốt nhất.",
    ],
    highlights: [
      "Vị trí biệt lập hoàn hảo, cách trung tâm chỉ 25–27km",
      "Kiến trúc trải nghiệm đa dạng với 5 phân khu riêng biệt",
      "Không gian cho cả gia đình từ trẻ nhỏ đến bố mẹ",
    ],
    note: "Thời gian tham quan: 07:30 – 18:00 (Thứ Hai – Chủ Nhật). Chuẩn bị 1-2 bộ quần áo dự phòng, khăn tắm và kem chống nắng.",
    image: "/images/14.png",
    type: "activity",
  },
  {
    id: "khoai-mi",
    category: "food",
    categoryLabel: "Ẩm thực",
    categoryColor: "bg-accent text-accent-foreground",
    title: "Khoai Mì Hấp Nước Cốt Dừa & Nước Mía Sầu Riêng",
    subtitle: "Thức quà quê lịch sử kết hợp cùng hương vị giải nhiệt độc đáo của đô thị",
    excerpt:
      "Miếng khoai mì dẻo bùi thơm ngậy nước cốt dừa cùng ly nước mía sầu riêng ngọt thanh sẽ là chiếc \"vé tuổi thơ\" ngọt ngào nhất dành cho cả gia đình.",
    body: [
      "Đây là món ăn dân dã mang tính biểu tượng lịch sử của vùng đất thép. Những củ khoai mì được ban quản lý tuyển chọn vô cùng kỹ lưỡng, hấp chín tới đạt độ bở tơi, béo ngậy nhờ lớp nước cốt dừa mịn màng, khi ăn kèm dừa nạo và muối mè rang sẽ tạo nên một hương vị mộc mạc mà quyến rũ.",
      "Để nhân đôi sự sảng khoái, bố mẹ đừng quên thưởng thức thêm nước mía sầu riêng — thức uống giải nhiệt độc đáo mang hương vị đặc trưng quyến rũ du khách đô thị. Sự phối trộn hài hòa giữa nước mía nguyên chất ngọt thanh và cơm sầu riêng béo ngậy, dậy mùi thơm nồng nàn sẽ nhanh chóng xua tan đi cái nắng nóng.",
    ],
    highlights: [
      "Khoai mì vùng đất thép được tuyển chọn kỹ lưỡng, đạt độ bở tơi và dẻo bùi hoàn hảo",
      "Kết hợp truyền thống với nước cốt dừa mịn màng, dừa nạo và muối mè rang béo ngậy",
      "Thức uống signature: Nước mía sầu riêng giải nhiệt độc đáo",
      "Món ăn phụ xế chiều lý tưởng giúp trẻ nhỏ tái tạo năng lượng nhanh chóng",
    ],
    note: "",
    image: "/images/15.png",
    type: "food",
  },
  {
    id: "grilled-fish",
    category: "food",
    categoryLabel: "Ẩm thực",
    categoryColor: "bg-accent text-accent-foreground",
    title: "Trải Nghiệm Tự Tay Nướng Cá Tại Ao",
    subtitle: "Thưởng thức thành quả lao động chân thật",
    excerpt:
      "Trải nghiệm vị ngọt ngào của thành quả do chính tay mình đánh bắt và thả mình vào khoảng không gian xanh lộng gió để chữa lành tâm hồn.",
    body: [
      "Phản hồi từ các đoàn du khách thực tế tại Green Park cho thấy, giá trị lớn nhất giữ chân người tham gia chính là tính chân thật của trải nghiệm. Một trong những hoạt động ẩm thực mang lại giá trị cảm xúc lớn nhất cho các con chính là dịch vụ trải nghiệm bắt cá tại ao và thưởng thức ngay tại chỗ.",
      "After cùng bạn bè lội bùn, tát mương bắt cá thật, các con sẽ được hỗ trợ đầy đủ trang thiết bị và dịch vụ nướng cá tại chỗ để thưởng thức thành quả lao động của mình. Cảm giác tự tay nướng chú cá mình vừa bắt được trên bếp than hồng sẽ giúp con hiểu sâu sắc hơn về giá trị của lao động.",
    ],
    highlights: [
      "Dịch vụ trải nghiệm bắt cá ao trọn gói, mang lại giá trị cảm xúc vượt trội",
      "Mức phí đã bao gồm trang thiết bị hỗ trợ đầy đủ và dịch vụ nướng cá tại chỗ",
    ],
    note: "Dịch vụ bắt cá tại ao: 395.000 VNĐ/ao (đã bao gồm đầy đủ dụng cụ và công nướng cá).",
    image: "/images/16.png",
    type: "food",
  },
  {
    id: "holiday-promo",
    category: "promotion",
    categoryLabel: "Chương trình ưu đãi",
    categoryColor: "bg-red-600 text-white",
    title: "Đại lễ rộn ràng, rước ngàn ưu đãi: Đưa \"Nông dân nhí\" về miền xanh",
    subtitle: "Dịp lễ 30/04 – 01/05 và Quốc tế Thiếu nhi 01/06",
    excerpt:
      "Thay vì chen chúc nơi phố thị xô bồ khói bụi, hãy để Green Park Củ Chi mang đến một không gian giải trí ngoài trời toàn diện ngập tràn tiếng cười cho thiên thần nhỏ của bạn.",
    body: [
      "Để tri ân các gia đình và nhóm khách nhỏ đã luôn đồng hành cùng sự phát triển của trang trại, Green Park áp dụng chính sách định giá cực kỳ linh hoạt nhằm tối ưu hóa chi phí vui chơi cho bố mẹ.",
      "Vé vào cổng phổ thông siêu \"hạt dẻ\" chỉ từ 60.000 – 70.000 VNĐ/khách, đặc biệt miễn phí hoàn toàn cho các em bé dưới 2 tuổi.",
      "Mức vé này đã bao gồm trọn gói phí tham quan cảnh quan vườn sinh thái thơ mộng và quyền lợi cho con tự do tại chuỗi trò chơi vận động tập thể (Sasuke Green Park, kéo co, cầu lắc, đi dây).",
    ],
    highlights: [
      "Giá vé vào cổng từ 60.000 – 70.000 VNĐ, MIỄN PHÍ cho bé dưới 2 tuổi",
      "Trọn gói chuỗi thử thách Sasuke, kéo co, cầu lắc không phát sinh chi phí",
      "Combo bắt cá ao 395.000 VNĐ/ao đã bao gồm dụng cụ và công nướng cá",
      "Thuê trang phục bà ba mộc mạc chỉ 30.000 VNĐ/bộ",
      "Góc check-in tại phân khu Suối Thơ chỉ 35.000 VNĐ/lượt",
    ],
    note: "Khung giờ vàng từ 07:30 – 18:00 hàng tuần.",
    image: "/images/17.png",
    type: "promotion",
    price: "Từ 60.000 VNĐ/khách",
  },
  {
    id: "school-tour",
    category: "promotion",
    categoryLabel: "Gói liên kết lữ hành",
    categoryColor: "bg-[#5B8A3C] text-white",
    title: "Siêu gói thầu liên kết lữ hành học đường: Chiết khấu lũy tiến, bùng nổ năng lượng ngoại khóa",
    subtitle: "Tối ưu hóa chi phí cho trường học công lập và đơn vị lữ hành",
    excerpt:
      "Tháo gỡ hoàn toàn bài toán ngân sách hạn chế cho các trường học với chiến lược định giá cận biên siêu ưu đãi từ đối tác chủ quản Vĩ Thành.",
    body: [
      "Green Park hiểu rằng quy mô đoàn học sinh càng lớn, việc kiểm soát học sinh và tối ưu hóa chi phí đầu xe càng là bài toán cân não của ban giám hiệu và đối tác lữ hành.",
      "Chính sách chiết khấu lũy tiến theo số lượng (phối hợp cùng Saigon Star Travel): Đoàn 40–59 học sinh: 480.000 VNĐ/học sinh. Từ 150 học sinh trở lên: chỉ còn 390.000 VNĐ/học sinh.",
      "Nếu lựa chọn gói Tour trọn gói (Tour.Pro.Vn): Nửa ngày 270.000 VNĐ, một ngày 325.000 VNĐ, đã bao gồm xe du lịch đời mới đưa đón, hướng dẫn viên chuyên nghiệp và bảo hiểm du lịch.",
    ],
    highlights: [
      "Chiết khấu lũy tiến: đoàn 40–59 học sinh 480.000 VNĐ, từ 150 học sinh chỉ 390.000 VNĐ",
      "Tour trọn gói nửa ngày 270.000 VNĐ, cả ngày 325.000 VNĐ (bao gồm xe, HDV, bảo hiểm)",
      "Gói ngày bổ sung bữa ăn trưa 35.000–40.000 VNĐ/học sinh tại Nhà hàng Green Park",
      "Miễn phí dịch vụ MC tổ chức sự kiện cho gói một ngày",
    ],
    note: "Liên hệ Saigon Star Travel để đặt gói dành cho trường học và đơn vị lữ hành.",
    image: "/images/18.png",
    type: "promotion",
    price: "Từ 270.000 VNĐ/học sinh",
  },
];

export const ACTIVITY_DESTINATIONS = DESTINATIONS.filter((d) => d.type === "activity");
export const FOOD_DESTINATIONS = DESTINATIONS.filter((d) => d.type === "food");
export const PROMOTION_DESTINATIONS = DESTINATIONS.filter((d) => d.type === "promotion");