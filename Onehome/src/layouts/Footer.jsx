import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-950 py-8 border-t border-gray-200 text-white">


      <div className="container mx-auto px-10">
        <div className="flex flex-wrap justify-between">

          <div className="something">
            <div className='text-3xl font-bold'>ONEHOME</div>
            <div className='text-gray-400'>
              <div className="">CÔNG TY CỔ PHẦN CÔNG NGHỆ ONEHOME</div>
              <div>MST: 0313817.128 - Sở KHĐT TP Hồ Chí Minh cấp ngày 20/05/2016</div>
              <div>Số 5-7, Đường B4, Phường An Lợi Đông, TP Thủ Đức, TP Hồ Chí Minh</div>
              <div>06/970 2321 – 1800 234 546</div>
            </div>
          </div>

          <div className="something">
            <h3 className="font-bold text-lg mb-4">CÔNG TY</h3>
            <div className=" text-gray-400 space-y-2">
              <div>Về OneHome</div>
              <div>Tuyển dụng</div>
              <div>Đội ngũ</div>
              <div>divên hệ</div>
              <div>Chính sách bảo mật</div>
              <div>Điều khoản sử dụng</div>
            </div>
          </div>

          <div className="something">
            <h3 className="font-bold text-lg mb-4">DỊCH VỤ</h3>
            <div className="text-gray-400 space-y-2">
              <div>Ký gửi nhà đất</div>
              <div>Mua với OneHome</div>
              <div>Thuê với OneHome</div>
              <div>OneHome Academy</div>
              <div>OneHome Agents</div>
              <div>Quy trình dịch vụ</div>
            </div>
          </div>

          <div className="something">
            <h3 className="font-bold text-lg mb-4">THÔNG TIN</h3>
            <div className="text-gray-400 space-y-2">
              <div>Tin tức thị trường</div>
              <div>Cập nhật sản phẩm</div>
              <div>Kiến thức cho mỗi giới</div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Footer;