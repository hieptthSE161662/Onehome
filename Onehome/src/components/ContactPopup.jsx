import React from 'react'

export default function ContactPopup
    () {
    return (
        <div>
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Liên hệ tư vấn</h3>

                {/* Ảnh chuyên viên tư vấn */}
                <div className="flex items-center space-x-2 mb-4">
                    <img
                        src="https://randomuser.me/api/portraits/men/52.jpg"
                        alt="Chuyên viên"
                        className="w-12 h-12 rounded-full"
                    />
                    <img
                        src="https://randomuser.me/api/portraits/men/51.jpg"
                        alt="Chuyên viên"
                        className="w-12 h-12 rounded-full"
                    />
                    <img
                        src="https://randomuser.me/api/portraits/women/52.jpg"
                        alt="Chuyên viên"
                        className="w-12 h-12 rounded-full"
                    />
                </div>

                <p className="text-gray-600 mb-4">Chuyên viên đã sẵn sàng hỗ trợ! Tư vấn hoàn toàn miễn phí.</p>

                {/* Nút gọi ngay */}
                <button className="w-full bg-red-600 text-white py-2 rounded-lg text-lg font-semibold hover:bg-red-700">
                    📞 Gọi chuyên viên ngay
                </button>

                {/* Liên hệ qua Zalo */}
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg text-lg font-semibold hover:bg-blue-600 mt-3">
                    💬 Liên hệ qua Zalo
                </button>

                {/* Chat với Rever & Gọi lại */}
                <div className="flex justify-between mt-3">
                    <button className="text-blue-600 underline">Chat với Rever</button>
                    <button className="text-blue-600 underline">Liên hệ lại tôi</button>
                </div>
            </div>
        </div>
    )
}