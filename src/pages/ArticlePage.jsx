import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import article1Img from '../assets/article1.png';
import article2Img from '../assets/article2.png';
import article3Img from '../assets/article3.png';
import article4Img1 from '../assets/article4-1.png';
import article4Img2 from '../assets/article4-2.png';
import logo from '../assets/logo.png';

const ArticlePage = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const navigate = useNavigate();

  const articles = [
    {
      img: article1Img,
      label: 'Capstone Project',
      title:
        'RELIEFLINK: A Blockchain-Enabled Mobile and Web Donation Management System with Prescriptive Analytics',
      summary:
        'During our SAD, each of our group members proposed titles for the Capstone project. My title was chosen, which became the foundation of our Relieflink project—focusing on blockchain-enabled donation management with analytics.',
      more:
        'This project involved blockchain integration, real-time donation tracking, and prescriptive analytics for better resource allocation. It allowed me to improve my mobile & web development skills while solving real-world problems. The system ensures transparency in donations and helps organizations track funds efficiently from source to distribution.'
    },
    {
      img: article2Img,
      label: 'Org Growth',
      title: 'My Growth with JBECP',
      summary:
        'Joining the Junior Blockchain Education Consortium of the Philippines (JBECP) helped me grow. Over two years, I gained valuable experiences, attended events at other NU campuses like NU Baliwag, and participated in BGC Solana events—meeting friends and learning beyond the classroom.',
      more:
        'I also took part in finance management and event planning, learning how to coordinate teams effectively. This experience strengthened my communication skills and boosted my confidence in professional settings. It also exposed me to blockchain communities and real-world organizational structures.'
    },
    {
      img: article3Img,
      label: 'Experience',
      title: 'NU-CCIT Student Council & Other Roles',
      summary:
        'I also served as part of NU-CCIT SC Committee under the OVP and held leadership roles in the JBECP. These experiences taught me teamwork, finance management, and organizational skills.',
      more:
        'During my tenure, I implemented initiatives that improved student engagement, mentored younger members, and helped organize campus-wide events. It enhanced my leadership, communication, and problem-solving abilities in real-life situations.'
    },
    {
      img: [article4Img1, article4Img2],
      label: 'Org Achievements',
      title: 'Outstanding Finance Officer & Student Body Recognition',
      summary:
        'During my term in the JBECP, I was awarded Outstanding Finance Officer, and our organization was recognized as the Outstanding Student Body.',
      more:
        'These achievements reflect my dedication in managing financial responsibilities and contributing to the success of our organization. It strengthened my discipline, accuracy, and accountability in handling funds and reports.'
    },
  ];

  return (
    <div className="flex flex-col gap-6">

      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-pink-200 bg-white/70 backdrop-blur-md shadow-sm">
        <div className="flex items-center justify-between px-6 py-3 lg:px-12">

          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-10 rounded-full border-2 border-pink-300 shadow-sm"
            />
            <span className="text-lg font-extrabold bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
              Rhyza Portfolio
            </span>
          </div>

          <nav className="flex items-center gap-8 text-sm font-semibold">

            <NavLink to="/" className={({ isActive }) =>
              `relative group ${isActive ? "text-pink-900 font-bold" : "text-pink-700"}`
            }>
              HOME
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>

            <NavLink to="/about" className={({ isActive }) =>
              `relative group ${isActive ? "text-pink-900 font-bold" : "text-pink-700"}`
            }>
              ABOUT
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>

            <NavLink to="/articles" className={({ isActive }) =>
              `relative group ${isActive ? "text-pink-900 font-bold" : "text-pink-700"}`
            }>
              ARTICLES
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>

          </nav>

        </div>
      </header>

      {/* HEADER */}
      <section className="border-b border-pink-200 bg-gradient-to-r from-pink-50 to-white px-4 py-8">
        <h1 className="text-3xl font-bold text-pink-900">
          My College Journey Highlights
        </h1>

        <p className="text-pink-600 mt-2">
          Click any card to view full article details
        </p>

        <div className="mt-4">
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
          >
            Back to Home
          </button>
        </div>
      </section>

      {/* GRID */}
      <section className="bg-pink-50 px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {articles.map((article, idx) => (
            <article
              key={idx}
              onClick={() =>
                idx === 0
                  ? navigate('/article-invalid-route') // ✅ ONLY CHANGE (404 TEST)
                  : setSelectedArticle(article)
              }
              className="cursor-pointer rounded-3xl border border-pink-200 bg-white p-4 shadow-sm hover:shadow-xl transition"
            >

              <div className="h-40 bg-pink-100 rounded-xl overflow-hidden">
                <img
                  src={Array.isArray(article.img) ? article.img[0] : article.img}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="mt-3 text-[11px] uppercase text-pink-500">
                {article.label}
              </p>

              <h3 className="mt-2 font-semibold text-pink-900">
                {article.title}
              </h3>

              <p className="mt-2 text-sm text-pink-600">
                {article.summary}
              </p>

            </article>
          ))}

        </div>
      </section>

      {/* MODAL (UNCHANGED) */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">

          <div className="bg-white w-full max-w-4xl rounded-2xl p-6 relative">

            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-3 right-4 text-xl text-pink-600"
            >
              ✕
            </button>

            <div className="bg-pink-100 rounded-xl mb-4 max-h-[300px] overflow-y-auto p-2">
              {Array.isArray(selectedArticle.img) ? (
                <div className="flex gap-2">
                  {selectedArticle.img.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="w-1/2 rounded-lg object-cover"
                    />
                  ))}
                </div>
              ) : (
                <img
                  src={selectedArticle.img}
                  className="w-full object-cover rounded-lg"
                />
              )}
            </div>

            <h2 className="text-xl font-bold text-pink-900">
              {selectedArticle.title}
            </h2>

            <p className="text-pink-500 text-sm">
              {selectedArticle.label}
            </p>

            <div className="mt-4 space-y-4 text-pink-700 max-h-[300px] overflow-y-auto pr-2">
              <p>{selectedArticle.summary}</p>
              <p>{selectedArticle.more}</p>
            </div>

            <div className="mt-6 flex justify-end gap-3">

              <button
                onClick={() => navigate('/')}
                className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
              >
                Back to Home
              </button>

              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 border border-pink-500 text-pink-600 rounded-lg"
              >
                Close
              </button>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default ArticlePage;