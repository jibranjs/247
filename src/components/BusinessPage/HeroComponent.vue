<script setup>
const paragraphs = [
    "Regardless if you're an individual or major business entity. Our experience in many industries such as finance, healthcare and retail enable us to ensure safe and timely delivery from point A to B. Sign up today for priority booking services!",

    "Our well-prepared, knowledgeable drivers guide you through your journey with ease. With no need for timetables or heavy luggage transferring via public transport. Set off on a seamless experience from the comfort of home – let us take care of it all."
]
</script>
<template>
    <section class="relative h-[25vh] bg-cover bg-center" style="background-image: url('/src/images/bg2.jpg');">
        <div class="absolute inset-0 bg-black/80"></div>
        <h1
            class="relative text-white text-4xl font-bold text-center !pt-[55px] !pb-2 w-[500px] py-2 rounded-lg !mx-auto ">
            247 Carz Business Accounts</h1>
        <hr class="relative border-2 border-[#FFC827] w-[250px] !mx-auto rounded-full">
        <p class="text-white relative text-center !mt-3 italic">"24/7 Radio Carz is the largest private hire company in
            Birmingham and surrounding areas"</p>
        <div class="flex gap-2 !pt-3 text-white justify-center">
            <p class="relative hover:text-[#FFC827]">Home</p>
            <span class="relative">></span>
            <p class="relative text-[#FFC827]">Business Accounts</p>
        </div>
    </section>
    <section class="max-w-[1536px] !px-6 !py-12 lg:!py-20 !mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-20">
            <div>
                <h2 class="text-4xl text-[#24212B] font-bold !pb-2">Our Experience in Many Industries</h2>
                 <hr class="border-2 border-[#FFC827] w-[350px] rounded-full !mb-4">
                 <p class="text-lg"></p>
                 <p class="text-lg !mt-6" v-for="para in paragraphs">{{ para }}</p>               
            </div>
            <div>
                <img src="/src/images/taxi.jpg" alt="Airport" class="rounded-xl">
            </div>
        </div>
    </section>
</template>