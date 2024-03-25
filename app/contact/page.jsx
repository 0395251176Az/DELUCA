import { MailIcon, HomeIcon, PhoneCall, FacebookIcon } from "lucide-react";
// components
import Form from "@/components/Form";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text & illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together.</h1>
            <p className="subtitle max-w-[400px]">
              DELUCA sẵn lòng hỗ trợ mọi yêu cầu từ bạn. Dù bạn cần thông tin
              sản phẩm, hỗ trợ đặt hàng, hay muốn chia sẻ ý tưởng thời trang
              golf, hãy liên hệ với chúng tôi. Đội ngũ DELUCA luôn lắng nghe và
              sẵn sàng giúp đỡ. Để biết thêm thông tin, truy cập trang liên hệ
              của chúng tôi.
            </p>
          </div>
          {/* illustration */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        {/* info text & form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* Facebook */}
            <div className="flex items-center gap-x-8">
              <FacebookIcon size={18} className="text-primary" />
              <div>Deluca Golf Shop</div>
            </div>
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>mksvietnam@gmail.com</div>
            </div>
            {/* address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>478 Minh Khai, Hai Bà Trưng, Hanoi</div>
            </div>
            {/* phone */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+84 903 296 812</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
