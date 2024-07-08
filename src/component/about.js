function About(){
    return(
    <section class="bg-color-rose-950 body-font">
  <div class="container px-5 py-24 mx-auto bg-color-rose-950">
    <div class="flex flex-col text-center w-full mb-20">
      <h2 class="text-xs text-rose-600 tracking-widest font-medium title-font mb-1">Let Mark Control Your Builds!</h2>
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-rose-500">BUILDCRAFTING IS HARD... BUT IT DOESN'T HAVE TO BE.</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-rose-600">Copy the current builds of our master buildcrafter, or use his suggestions as inspiration, giving you more time to actually play the game, and not theorycraft and do math in menus.</p>
    </div>
    <div class="flex flex-wrap">
      <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-emerald-600 border-opacity-60">
        <h2 class="text-lg sm:text-xl text-emerald-800 font-medium title-font mb-2">Who is Mark?</h2>
        <p class="leading-relaxed text-base mb-4 text-emerald-600">Mark is our in-house buildcrafting veteran, an accomplished PvE and PvP player of many games, he strives to help those with limited time to play reach their maximum potential.</p>
        <a class="text-indigo-500 inline-flex items-center text-emerald-700" href="https://destinytracker.com/destiny-2/profile/xbl/4611686018438460136/overview">View Mark's Stats
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-emerald-600 border-opacity-60">
        <h2 class="text-lg sm:text-xl text-emerald-800 font-medium title-font mb-2">About Our Team</h2>
        <p class="leading-relaxed text-base mb-4 text-emerald-600">It is not an uncommon opinion that the high-level content is the best. However, the high barrier to entry can seem daunting for some players. Our team is one that routinely completes these challenges, so why not take advice from the best?</p>
      </div>
    </div>
    <form>
        <button class="flex mx-auto mt-16 text-white bg-emerald-500 border-0 py-2 px-8 focus:outline-none hover:bg-emerald-800 rounded text-lg" formAction="https://github.com/parne92">My Github</button>
    </form>
  </div>
</section>
    );
} export default About;