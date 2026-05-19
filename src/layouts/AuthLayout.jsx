import { Outlet } from 'react-router-dom';
import logo from '../assets/logo.png';

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-pink-100 text-pink-900">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">

        {/* LEFT SIDE */}
        <div className="flex items-center justify-center border-b-2 border-pink-300 bg-pink-200 p-8 sm:p-10 lg:border-b-0 lg:border-r-2 lg:p-16">

          <div className="flex w-full max-w-md items-center justify-center rounded-[2rem] border-2 border-dashed border-pink-300 bg-white/60 p-8 sm:p-10">

            <div className="relative aspect-square w-full max-w-[18rem] border-[10px] border-white/90 rounded-3xl overflow-hidden flex items-center justify-center">

              <img
                src={logo}
                alt="Logo"
                className="w-full h-full object-contain"
              />

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <main className="flex items-center bg-white px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>

      </div>
    </section>
  );
};

export default AuthLayout;