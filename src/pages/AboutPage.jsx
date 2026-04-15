import React from 'react';
import Button from '../components/CustomButton';
import profilePic from '../assets/profile.jpg';

const AboutPage = () => (
  <div className="flex w-full flex-col gap-6">

    {/* ✅ ABOUT SECTION */}
    <section className="border-b border-pink-200 bg-gradient-to-r from-pink-50 via-white to-pink-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        
        {/* Profile Image */}
        <div className="rounded-3xl border border-pink-200 bg-white p-6 shadow-sm">
          <div className="flex min-h-72 items-center justify-center rounded-[1.25rem] bg-pink-100">
            <img
              src={profilePic}
              alt="Rhyza Estrella"
              className="h-44 w-44 rounded-full object-cover border-4 border-pink-300 shadow-md transition duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* About Content */}
        <div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-pink-500">
            About Me
          </p>

          <h1 className="max-w-xl text-3xl font-extrabold leading-tight text-pink-900 sm:text-4xl">
            Aspiring Mobile and Web Developer
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-7 text-pink-600 sm:text-base">
            I am <strong>Rhyza Ann Hernandez Estrella</strong>, a Bachelor of Science in Information Technology student 
            specializing in <strong>Mobile & Web Application Development</strong>. I focus on building clean, user-friendly systems and exploring modern technologies.
          </p>

          <p className="mt-3 max-w-lg text-sm leading-7 text-pink-600 sm:text-base">
            In our capstone project, I served as a <strong>Mobile Developer</strong> for <strong>ReliefLink</strong>, 
            integrating <strong>blockchain technology</strong> to improve transparency and efficiency in relief operations.
          </p>

          <p className="mt-3 max-w-lg text-sm leading-7 text-pink-600 sm:text-base">
            I am also active in leadership and student organizations. I became the 
            <strong> Block Representative of INF 233</strong> and served as 
            <strong> VP of Finance</strong> for the <strong>JBECP</strong>, where I was recognized as an 
            <strong> Outstanding Finance Officer</strong>.
          </p>

          <p className="mt-3 max-w-lg text-sm leading-7 text-pink-600 sm:text-base">
            I was also part of the <strong>NU-CCIT Student Council</strong> under the <strong>OVP</strong>, 
            gaining experience in teamwork, coordination, and leadership.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button to="/" variant="primary">Back Home</Button>
            <Button to="/articles">Open Articles</Button>
          </div>
        </div>

      </div>
    </section>

    {/* ✅ PROFILE OVERVIEW */}
    <section className="bg-pink-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-pink-500">
          Profile Overview
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-pink-900">
          Quick summary blocks
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { value: "04", label: "Years Learning IT" },
          { value: "10+", label: "Projects" },
          { value: "03", label: "Leadership Roles" },
          { value: "04", label: "Focus Areas" },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-3xl border border-pink-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-2xl font-bold text-pink-900">{item.value}</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-pink-500">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* ✅ SKILLS SECTION */}
    <section className="bg-pink-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

        {/* Skills */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-pink-500">
            Skills & Experience
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-pink-900">
            What I can do
          </h2>

          <div className="mt-6 space-y-4">

            {[
              {
                title: "Technical Skills",
                desc: "HTML, CSS, JavaScript, React, Tailwind CSS, Basic SQL, Mobile Development, and Web Systems Development."
              },
              {
                title: "Tools & Technologies",
                desc: "VS Code, GitHub, Firebase, SQL Server Management Studio (SSMS), and Figma."
              },
              {
                title: "Soft Skills",
                desc: "Leadership, communication, teamwork, adaptability, and problem-solving."
              }
            ].map((item, i) => (
              <article
                key={i}
                className="rounded-3xl border border-pink-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-pink-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-pink-600">
                  {item.desc}
                </p>
              </article>
            ))}

          </div>
        </div>

        {/* Visual Grid */}
        <div className="rounded-3xl border border-pink-200 bg-white p-5 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-pink-500">
            Visual Grid
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[1,2,3,4].map((_, i) => (
              <div
                key={i}
                className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-pink-100 transition hover:scale-105"
              >
                <div className="h-12 w-12 border-2 border-pink-300 bg-white" />
              </div>
            ))}
          </div>

          <Button className="mt-5" variant="primary">
            View Section
          </Button>
        </div>

      </div>
    </section>

  </div>
);

export default AboutPage;