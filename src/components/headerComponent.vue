<script setup>
const navbar = ["BUSINESS","SERVICES","DRIVE WITH US","ABOUT US"]
</script>
<template>
<section>
    <div class="max-w-[1536px] !mx-auto">
        <div class="flex justify-between items-center gap-20">
            <div>
                <a href="/"><img src="/src/images/logo.webp" alt="LOGo" class="w-[64px]"></img></a>
            </div>
            <nav class="flex gap-4 !py-4">
                <a href="/business" v-for="nav in navbar" class="!py-3 !px-4 border-r-1">{{ nav }}</a>
                <a href="#" class="bg-[#FFC827] !px-4 rounded !py-3">BOOK ONLINE</a>
            </nav>
        </div>
    </div>
</section>
</template>