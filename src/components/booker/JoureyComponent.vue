<script setup>
import Select from 'primevue/select';
import AutoComplete from 'primevue/autocomplete';
</script>
<template>
    <div class="relative">
        <AutoComplete v-model="pickupvalue" placeholder="Pick Up Location" :suggestions="items" @complete="search"
            class="!px-4 w-full !rounded !bg-white focus:border focus:border-[#FFC827] absolute z-20  !py-3 !mt-3" />
        <AutoComplete v-model="value" placeholder="Drop off Location" :suggestions="items" @complete="search"
            class="!px-4 w-full !rounded !bg-white focus:border focus:border-[#FFC827] absolute z-20  !py-3 !mt-3" />
        <div class="flex justify-end">
            <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select Language"
                class="!px-4 w-[200px] absolute z-20 !mt-3 !rounded !bg-[#FFC827] !py-3" />
        </div>
    </div>
</template>