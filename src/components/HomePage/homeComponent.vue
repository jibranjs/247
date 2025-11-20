<script setup>
import Select from 'primevue/select';
import AutoComplete from 'primevue/autocomplete';
import { ref } from "vue";

// stepper
import Stepper from 'primevue/stepper';
import StepList from 'primevue/steplist';
import StepPanels from 'primevue/steppanels';
import StepItem from 'primevue/stepitem';
import Step from 'primevue/step';
import StepPanel from 'primevue/steppanel';


const selectedCity = ref();
const cities = ref([
    { name: 'English', code: 'en' },
    { name: 'Dutch', code: 'Dc' },
    { name: 'German', code: 'Gr' },
]);

const pickupvalue = ref(null);
const items = ref([]);

const search = (event) => {
    items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
}
</script>
<template>
    <section class="bg-[url(/src/images/homeBgNew.jpg)] bg-cover bg-bottom h-[90vh]">
        <div class="max-w-[1536px] !mx-auto !py-12">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 ">
                <div class="bg-white/50 h-[60vh] w-[475px] !p-6 !mt-20 shadow-xl">
                    <div class="relative">                             
                       <AutoComplete v-model="pickupvalue" placeholder="Pick Up Location" :suggestions="items" @complete="search" class="!px-4 w-full !rounded !bg-white focus:border focus:border-[#FFC827] absolute z-20  !py-3 !mt-3" />          
                       <AutoComplete v-model="value" placeholder="Drop off Location" :suggestions="items" @complete="search" class="!px-4 w-full !rounded !bg-white focus:border focus:border-[#FFC827] absolute z-20  !py-3 !mt-3" />      
                            <div class="flex justify-end">
                           <Select v-model="selectedCity" :options="cities" optionLabel="name"
                                placeholder="Select Language" class="!px-4 w-[200px] absolute z-20 !mt-3 !rounded !bg-[#FFC827] !py-3" />
                      </div>  
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>