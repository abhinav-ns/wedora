export default function Home() {
  return (
    <main
      className="min-h-screen w-full max-w-[430px] mx-auto px-[18px] pt-5 pb-36 overflow-x-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/bg-texture.png')",
      }}
    >

      {/* Top Bar */}
      <div className="flex items-center justify-between mb-8">

        <p className="text-sm font-medium text-[#1F1F1F]">
          📍 Varsha
        </p>

        <div className="text-[22px]">
          🔔
        </div>

      </div>

      {/* Hero Section */}
      <section className="relative mb-10 min-h-[210px] overflow-hidden">

        {/* Floral Image */}
        <img
          src="/images/flowers.png"
          className="absolute right-[-18%] top-[-5%] w-[68%] max-w-[260px] aspect-square object-contain opacity-95 pointer-events-none"
        />

        {/* Content */}
        <div className="relative z-10 max-w-[68%]">

          <h1
            className="
              font-semibold
              text-[#171717]
              leading-[0.98]
              tracking-[-0.04em]
              text-[clamp(2.7rem,9vw,4rem)]
            "
          >

            Create Your
            <br />

            Smart{" "}

            <span className="text-[#C8A96B]">
              Wedding
            </span>

            <br />

            Invitation

          </h1>

          <p className="mt-4 text-[clamp(1rem,3.5vw,1.15rem)] text-[#746860] leading-relaxed">
            Plan every detail beautifully
          </p>

        </div>

      </section>

      {/* Search Bar */}
      <div className="w-full bg-white/75 backdrop-blur-xl rounded-[28px] px-5 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-white/50 flex items-center justify-between mb-9">

        <span className="text-[#B8ACA0] text-[clamp(0.95rem,3vw,1rem)]">
          Search services...
        </span>

        <span className="text-[20px]">
          🎤
        </span>

      </div>

      {/* Categories */}
      <section className="flex gap-4 overflow-x-auto no-scrollbar pb-5 pt-1 mb-10 px-[18px] -mx-[18px]">

        {/* Active Card */}
        <div className="flex-shrink-0 min-w-[82px] max-w-[90px] aspect-square bg-[#C8A96B] rounded-[28px] flex flex-col items-center justify-center shadow-lg px-2">

          <span className="text-[clamp(1.3rem,5vw,1.5rem)]">
            ✉️
          </span>

          <p className="mt-2 text-[clamp(0.9rem,3vw,1rem)] font-medium text-[#1F1F1F]">
            Invites
          </p>

        </div>

        {/* Card */}
        <div className="flex-shrink-0 min-w-[82px] max-w-[90px] aspect-square bg-[#C8A96B] rounded-[28px] flex flex-col items-center justify-center shadow-lg px-2">

          <span className="text-[clamp(1.3rem,5vw,1.5rem)]">
            🍽️
          </span>

          <p className="mt-2 text-[clamp(0.9rem,3vw,1rem)] text-[#1F1F1F]">
            Catering
          </p>

        </div>

        {/* Card */}
        <div className="flex-shrink-0 min-w-[82px] max-w-[90px] aspect-square bg-[#C8A96B] rounded-[28px] flex flex-col items-center justify-center shadow-lg px-2">

          <span className="text-[clamp(1.3rem,5vw,1.5rem)]">
            📸
          </span>

          <p className="mt-2 text-[clamp(0.9rem,3vw,1rem)] text-[#1F1F1F]">
            Photos
          </p>

        </div>

        {/* Card */}
        <div className="flex-shrink-0 min-w-[82px] max-w-[90px] aspect-square bg-[#C8A96B] rounded-[28px] flex flex-col items-center justify-center shadow-lg px-2">

          <span className="text-[clamp(1.3rem,5vw,1.5rem)]">
            💡
          </span>

          <p className="mt-2 text-[clamp(0.9rem,3vw,1rem)] text-[#1F1F1F]">
            Lighting
          </p>

        </div>

      </section>

      {/* Popular Section */}
      <section className="mt-2">

        <div className="flex items-center justify-between mb-5">

          <h2 className="text-[clamp(1.8rem,6vw,2.3rem)] font-bold text-[#1F1F1F] leading-none">
            Popular This Week
          </h2>

          <p className="text-[#C8A96B] text-sm font-medium">
            View all
          </p>

        </div>

        <div className="grid grid-cols-2 gap-4">

          {/* Card 1 */}
          <div className="relative aspect-[0.78] rounded-[30px] overflow-hidden shadow-xl">

            <img
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            <div className="absolute bottom-5 left-5">

              <p className="text-white text-[clamp(1.1rem,4vw,1.4rem)] font-semibold leading-tight">
                Luxury <br />
                Invitations
              </p>

            </div>

          </div>

          {/* Card 2 */}
          <div className="relative aspect-[0.78] rounded-[30px] overflow-hidden shadow-xl">

            <img
              src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            <div className="absolute bottom-5 left-5">

              <p className="text-white text-[clamp(1.1rem,4vw,1.4rem)] font-semibold leading-tight">
                Premium <br />
                Catering
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Wedding Plan */}
      <section className="mt-10 bg-[#F1EBE4] rounded-[32px] p-6 shadow-sm">

        <h2 className="text-[clamp(1.6rem,5vw,2rem)] font-bold text-[#1F1F1F] mb-7">
          Build Your Wedding Plan
        </h2>

        <div className="flex items-center justify-between">

          {/* Step */}
          <div className="flex flex-col items-center">

            <div className="w-[58px] h-[58px] rounded-full bg-[#C8A96B] flex items-center justify-center shadow-md">

              <span className="text-white text-xl">
                ✉️
              </span>

            </div>

            <p className="mt-3 text-xs font-medium text-[#C8A96B]">
              Invite
            </p>

          </div>

          <div className="flex-1 h-[2px] bg-[#D8CCC0] mx-2 mb-6" />

          {/* Step */}
          <div className="flex flex-col items-center">

            <div className="w-[58px] h-[58px] rounded-full bg-white flex items-center justify-center">

              <span className="text-xl">
                👥
              </span>

            </div>

            <p className="mt-3 text-xs text-[#7C6F66]">
              Guests
            </p>

          </div>

          <div className="flex-1 h-[2px] bg-[#D8CCC0] mx-2 mb-6" />

          {/* Step */}
          <div className="flex flex-col items-center">

            <div className="w-[58px] h-[58px] rounded-full bg-white flex items-center justify-center">

              <span className="text-xl">
                🍽️
              </span>

            </div>

            <p className="mt-3 text-xs text-[#7C6F66]">
              Food
            </p>

          </div>

        </div>

      </section>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white/95 backdrop-blur-xl border-t border-[#EFE8DF] px-6 pt-4 pb-7 flex items-center justify-between">

        <div className="flex flex-col items-center">

          <span className="text-2xl">
            🏠
          </span>

          <p className="text-xs mt-1 text-[#C8A96B] font-medium">
            Home
          </p>

        </div>

        <div className="flex flex-col items-center">

          <span className="text-2xl">
            📋
          </span>

          <p className="text-xs mt-1 text-[#7C6F66]">
            My Plan
          </p>

        </div>

        {/* Center Button */}
        <div className="w-[68px] h-[68px] rounded-full bg-[#C8A96B] flex items-center justify-center shadow-[0_10px_30px_rgba(200,169,107,0.35)] -mt-10">

          <span className="text-white text-4xl font-light">
            +
          </span>

        </div>

        <div className="flex flex-col items-center">

          <span className="text-2xl">
            🔍
          </span>

          <p className="text-xs mt-1 text-[#7C6F66]">
            Explore
          </p>

        </div>

        <div className="flex flex-col items-center">

          <span className="text-2xl">
            👤
          </span>

          <p className="text-xs mt-1 text-[#7C6F66]">
            Profile
          </p>

        </div>

      </div>

    </main>
  );
}