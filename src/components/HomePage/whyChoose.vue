<script setup>
const paragraphs = [
    "Whether you are an individual or a business, our experience across industries like finance, healthcare, and retail ensures your deliveries are safe and on time. Sign up today for priority booking and reliable service.",

    "Our team is committed to providing seamless delivery solutions tailored to your needs. With a focus on efficiency, safety, and reliability, we handle every shipment with care, giving you peace of mind and the confidence that your goods will arrive on time, every time.",

    "Our experienced and professional drivers ensure a smooth, stress-free journey. No need to worry about schedules or managing heavy luggage on public transport—simply relax at home and let us take care of everything for you."
]
const information = [
    {
        name:"Guaranteed Vehicles",
        para:"Ensures you get a car even at the busiest times."
    },
        {
        name:"Guaranteed Vehicles",
        para:"Ensures you get a car even at the busiest times."
    },
        {
        name:"Guaranteed Vehicles",
        para:"Ensures you get a car even at the busiest times."
    },
        {
        name:"Guaranteed Vehicles",
        para:"Ensures you get a car even at the busiest times."
    },
        {
        name:"Guaranteed Vehicles",
        para:"Ensures you get a car even at the busiest times."
    },
        {
        name:"Guaranteed Vehicles",
        para:"Ensures you get a car even at the busiest times."
    },
        {
        name:"Guaranteed Vehicles",
        para:"Ensures you get a car even at the busiest times."
    },
        {
        name:"Guaranteed Vehicles",
        para:"Ensures you get a car even at the busiest times."
    },
]
</script>
<template>
    <section class="max-w-[1536px] !px-6 !py-12 lg:!py-20 !mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-20">
            <div v-for="info in information">
                <h2>{{ info.name }}</h2>
                <p>{{ info.para }}</p>
            </div>
        </div>
    </section>
</template>