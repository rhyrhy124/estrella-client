import React, { useState } from 'react';
import Button from '../components/CustomButton';
import article1Img from '../assets/article1.png';
import article2Img from '../assets/article2.png';
import article3Img from '../assets/article3.png';
import article4Img1 from '../assets/article4-1.png';
import article4Img2 from '../assets/article4-2.png';

const ArticlePage = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const articles = [
    {
      img: article1Img,
      label: 'Capstone Project',
      title: 'RELIEFLINK: A Blockchain-Enabled Mobile and Web Donation Management System with Prescriptive Analytics',
      summary: 'During our SAD, each of our group members proposed titles for the Capstone project. My title was chosen, which became the foundation of our Relieflink project—focusing on blockchain-enabled donation management with analytics.',
      more: 'This project involved blockchain integration, real-time donation tracking, and prescriptive analytics for better resource allocation. It allowed me to improve my mobile & web development skills while solving real-world problems.'
    },
    {
      img: article2Img,
      label: 'Org Growth',
      title: 'My Growth with JBECP',
      summary: 'Joining the Junior Blockchain Education Consortium of the Philippines (JBECP) helped me grow. Over two years, I gained valuable experiences, attended events at other NU campuses like NU Baliwag, and participated in BGC Solana events—meeting friends and learning beyond the classroom.',
      more: 'I also took part in finance management and event planning, learning how to coordinate teams effectively. This experience strengthened my communication skills and boosted my confidence in professional settings.'
    },
    {
      img: article3Img,
      label: 'Experience',
      title: 'NU-CCIT Student Council & Other Roles',
      summary: 'I also served as part of NU-CCIT SC Committee under the OVP and held leadership roles in the JBECP. These experiences taught me teamwork, finance management, and organizational skills.',
      more: 'During my tenure, I implemented initiatives that improved student engagement, mentored younger members, and helped organize campus-wide events.'
    },
    {
      img: [article4Img1, article4Img2],
      label: 'Org Achievements',
      title: 'Outstanding Finance Officer & Student Body Recognition',
      summary: 'During my term in the JBECP, I was awarded Outstanding Finance Officer, and our organization was recognized as the Outstanding Student Body.',
      more: 'These achievements reflect my dedication in managing financial responsibilities and contributing to the success of our organization.'
    },
  ];

  return (
    <div className="flex w-full flex-col gap-6">

      {/* ✅ ENHANCED HEADER */}
      <section className="border-b border-pink-200 bg-gradient-to-r from-pink-50 via-white to-pink-100 px-4 py-8 sm:px-6 lg:px-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-pink-500">
          Articles
        </p>
        <h1 className="max-w-xl text-3xl font-extrabold leading-tight text-pink-900 sm:text-4xl">
          My College Journey Highlights
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-7 text-pink-600 sm:text-base">
          A showcase of my Capstone project, organizational growth, and experiences that shaped my journey in development.
        </p>
        <div className="mt-6">
          <Button to="/" variant="primary">Back Home</Button>
        </div>
      </section>

      {/* ✅ ENHANCED ARTICLES GRID */}
      <section className="bg-pink-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {articles.map((article, idx) => (
            <article
              key={idx}
              className="group rounded-3xl border border-pink-200 bg-white p-4 flex flex-col shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              
              {/* IMAGE */}
              <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-pink-100 overflow-hidden gap-2">
                {Array.isArray(article.img) ? (
                  <div className="flex w-full gap-2">
                    {article.img.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${article.title} ${i + 1}`}
                        className="object-cover h-40 w-1/2 rounded-lg transition-transform duration-300 group-hover:scale-105"
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    src={article.img}
                    alt={article.title}
                    className="object-cover h-full w-full transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </div>

              {/* TEXT */}
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-pink-500">
                {article.label}
              </p>

              <h3 className="mt-2 text-lg font-semibold text-pink-900 group-hover:text-pink-700 transition">
                {article.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-pink-600">
                {article.summary}
              </p>

              {/* EXPAND */}
              {expanded[idx] && (
                <p className="mt-2 text-sm leading-6 text-pink-600 animate-fadeIn">
                  {article.more}
                </p>
              )}

              {/* BUTTON */}
              <Button
                className="mt-4"
                variant="primary"
                onClick={() => toggleExpand(idx)}
              >
                {expanded[idx] ? 'Show Less' : 'Read More'}
              </Button>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ArticlePage;