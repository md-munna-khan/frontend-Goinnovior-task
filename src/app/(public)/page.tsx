

import LandingPage from "@/components/Home/LandingPage";

export default async function HomePage() {
  // const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
  //   cache:"no-store",
  //   next: {
  //     tags: ["PROJECTS"],
  //   },
  // });

  // const { data: projects } = await result.json();
  return (
    <div>
      {/* <Banner /> */}
      <div>
        {/* <AboutPage /> */}
        {/* <HeroSection /> */}
        <LandingPage/>
        
      </div>

    


    </div>
  );
}
