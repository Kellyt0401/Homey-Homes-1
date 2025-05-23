
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <>
    <section className="text-center py-10 bg-gradient-to-r from-blue-100 to-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Homey Homes</h1>
      <p className="text-lg">Chuyên trang giới thiệu dự án bất động sản cao cấp tại Thủ Thiêm</p>
    </section>
    <div className="grid md:grid-cols-3 gap-6 p-8">
      {[
        { name: "Metropole Opera", desc: "Biểu tượng sang trọng bên Nhà hát TP", img: "https://via.placeholder.com/400x250?text=Opera" },
        { name: "Metropole Crest", desc: "View sông Sài Gòn tuyệt đẹp, thiết kế cao cấp", img: "https://via.placeholder.com/400x250?text=Crest" },
        { name: "Metropole Gallery", desc: "Không gian sống đậm chất nghệ thuật", img: "https://via.placeholder.com/400x250?text=Gallery" },
      ].map((project, i) => (
        <div key={i} className="rounded-2xl shadow-xl overflow-hidden">
          <img src={project.img} alt={project.name} className="h-48 w-full object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-gray-600">{project.desc}</p>
          </div>
        </div>
      ))}
    </div>
    <form className="max-w-xl mx-auto p-8 bg-white shadow-md rounded-xl space-y-4">
      <h3 className="text-2xl font-bold text-center">Liên hệ tư vấn</h3>
      <input type="text" placeholder="Họ và tên" className="w-full border p-2 rounded-lg" />
      <input type="tel" placeholder="Số điện thoại" className="w-full border p-2 rounded-lg" />
      <input type="email" placeholder="Email" className="w-full border p-2 rounded-lg" />
      <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded-lg">Gửi thông tin</button>
    </form>
    <footer className="bg-gray-100 text-center py-6 mt-12">
      <p className="text-sm">© 2025 Homey Homes | Zalo: 0909.999.999 | Email: info@homeyhomes.vn</p>
    </footer>
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
