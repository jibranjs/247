<script setup>
const information = [
    {
        icon: "mdi:taxi",
        name: "Guaranteed Vehicles. Test",
        para: "Ensures you get a car even at the busiest times."
    },
    {
        icon: "iconamoon:clock",
        name: "Faster Pick-Ups",
        para: "Shorter waiting times for your team."
    },
    {
        icon: "solar:tag-price-bold",
        name: "Discounted Rates",
        para: "Lower, business-only pricing."
    },
    {
        icon: "material-symbols:book-online-outline-rounded",
        name: "Priority E-Booking",
        para: "Faster, streamlined booking access."
    },
    {
        icon: "ri:team-line",
        name: "Dedicated Account Team",
        para: "Support managed by a trained team."
    },
    {
        icon: "fa-solid:chart-line",
        name: "Easy Tracking & Expenses",
        para: "Clear view of all trips and costs."
    }
]
</script>
<template>
    <section class="max-w-[1536px] !px-6 !py-12 lg:!py-20 !mx-auto">
        <h2 class="text-4xl font-bold text-center !mb-2">Why Choose Us ?</h2>
         <hr class="border-2 border-[#FFC827] w-[250px] !mb-12 !mx-auto rounded-full">
        <div class="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-12">
            <div v-for="info in information" class="border border-[#FFC827] hover:bg-[#FFC827] !p-12 rounded-xl">
                <Icon :icon="info.icon" class="w-[50px] h-[50px] text-[#FFC827] !mx-auto !mb-3 bg-[#24212B] rounded-full !p-2"></Icon>
                <h2 class="text-xl text-[#24212B] font-bold text-center">{{ info.name }}</h2>
                <p class="text-center text-[#333]">{{ info.para }}</p>
            </div>
        </div>
    </section>
</template>