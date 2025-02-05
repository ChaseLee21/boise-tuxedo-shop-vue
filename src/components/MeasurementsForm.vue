<template>
    <main class="xl:w-[80vw] xl:flex xl:flex-col xl:m-auto mx-2 bg-gray-800 rounded p-1">
        <form class="mx-2" @submit.prevent="submitMeasurementsForm">
            <div class="flex-col mb-1">
                <label class="text-white mx-1 text-lg">First and Last Name</label>
                <label v-if="v$.clientName.$errors.length > 0" class="text-red-500 mx-1 text-lg flex-row w-auto">
                    <span class="w-auto" v-for="error in v$.clientName.$errors">*{{error.$message || error.$params.message}}</span>
                </label>
                <input id="clientNameInput" v-model="clientName" class="w-full rounded p-1" type="text" maxlength="50" placeholder="John Doe" />
            </div>
            <div class="flex-col my-1">
                <label class="text-white mx-1 text-lg">Email</label>
                <label class="text-white opacity-80 text-sm">we will only email you if we have any questions about your measurements</label>
                <label v-if="v$.clientEmail.$errors.length > 0" class="text-red-500 mx-1 text-lg flex-row w-auto">
                    <span class="w-auto" v-for="error in v$.clientEmail.$errors">*{{error.$message || error.$params.message}}</span>
                </label>
                <input id="clientEmailInput" v-model="clientEmail" class="w-full rounded p-1" type="text" placeholder="JohnDoe@gmail.com" />
            </div>
            <div class="flex-col my-1">
                <label class="text-white mx-1 text-lg">Wedding or Event Name</label>
                <label class="text-white opacity-80 text-sm">For weddings, use the name of the marrying couple</label>
                <label v-if="v$.eventName.$errors.length > 0" class="text-red-500 mx-1 text-lg flex-row w-auto">
                    <span class="w-auto" v-for="error in v$.eventName.$errors">*{{error.$message || error.$params.message}}</span>
                </label>
                <input id="eventNameInput" v-model="eventName" class="w-full rounded p-1" type="text" maxlength="100" placeholder="John & Jane Doe's Wedding" />
            </div>
            <div class="flex-col my-1">
                <label class="text-white mx-1 text-lg">Wedding or Event Role</label>
                <label class="text-white opacity-80 text-sm"></label>
                <label v-if="v$.eventRole.$errors.length > 0" class="text-red-500 mx-1 text-lg flex-row w-auto">
                    <span class="w-auto" v-for="error in v$.eventRole.$errors">*{{error.$message || error.$params.message}}</span>
                </label>
                <select id="eventRoleInput" v-model="eventRole" class="w-full rounded p-1">
                    <option value="No options selected" disabled>Please select an option</option>
                    <option value="Groom">Groom</option>
                    <option value="Best Man">Best Man</option>
                    <option value="Groomsman">Groomsman</option>
                    <option value="Father of the Bride">Father of the Bride</option>
                    <option value="Father of the Groom">Father of the Groom</option>
                    <option value="Officiant">Officiant</option>
                    <option value="Usher">Usher</option>
                    <option value="Ring Bearer">Ring Bearer</option>
                    <option value="Guest">Guest</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div class="flex-col my-1 w-full">
                <label class="text-white mx-1 text-lg">Wedding or Event Date</label>
                <label class="text-white opacity-80 text-sm"></label>
                <label v-if="v$.eventDate.$errors.length > 0" class="text-red-500 mx-1 text-lg flex-row w-auto">
                    <span class="w-auto" v-for="error in v$.eventDate.$errors">*{{error.$message || error.$params.message}}</span>
                </label>
                <input id="eventDateInput" v-model="eventDate" class="w-full rounded p-1" type="date" placeholder="" />
            </div>
            <div class="flex-col my-1">
                <label class="text-white mx-1 text-lg">Height:</label>
                <input class="w-auto bg-gray-800 text-white" id="heightString" type="text" :value="heightString" readonly>
                <div class="w-full">
                    <input class=" w-full" id="heightRange" type="range" min="1" max="72" v-model="heightValue" />
                </div>
            </div>
            <div class="flex-col my-1">
                <label class="text-white mx-1 text-lg">Weight</label>
                <label class="text-white opacity-80 text-sm">Pounds (lbs)</label>
                <input id="weightInput" v-model="weight" class="w-full rounded p-1" type="number" min="10" max="400" placeholder="200" />
            </div>
            <div class="flex-col my-1">
                <label class="text-white mx-1 text-lg">Shoe Size</label>
                <label class="text-white opacity-80 text-sm">US Men's</label>
                <select id="shoeSizeInput" v-model="shoeSize" class="w-full rounded p-1">
                    <option value="0">Please select an option</option>
                    <option value="6">6</option>
                    <option value="6.5">6.5</option>
                    <option value="7">7</option>
                    <option value="7.5">7.5</option>
                    <option value="8">8</option>
                    <option value="8.5">8.5</option>
                    <option value="9">9</option>
                    <option value="9.5">9.5</option>
                    <option value="10">10</option>
                    <option value="10.5">10.5</option>
                    <option value="11">11</option>
                    <option value="11.5">11.5</option>
                    <option value="12">12</option>
                    <option value="12.5">12.5</option>
                    <option value="13">13</option>
                    <option value="13.5">13.5</option>
                    <option value="14">14</option>
                    <option value="14.5">14.5</option>
                    <option value="15">15</option>
                    <option value="15.5">15.5</option>
                </select>
            </div>
            <div class="flex-col my-1">
                <label class="text-white mx-1 text-lg">Shoe Width</label>
                <select id="shoeWidthInput" v-model="shoeWidth" class="w-full rounded p-1">
                    <option value="Regular">Regular</option>
                    <option value="Wide">Wide</option>
                </select>
            </div>
            <div class="flex-col my-1">
                <label class="text-white mx-1 text-lg">Chest</label>
                <label class="text-white opacity-80 text-sm">Inches</label>
                <select id="chestInput" v-model="chest" class="w-full rounded p-1">
                    <option value="0">Please select an option</option>
                    <option value="35">35</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    <option value="45">45</option>
                    <option value="46">46</option>
                    <option value="47">47</option>
                    <option value="48">48</option>
                    <option value="49">49</option>
                    <option value="50">50</option>
                    <option value="51">51</option>
                    <option value="52">52</option>
                    <option value="53">53</option>
                    <option value="54">54</option>
                    <option value="55">55</option>
                </select>
            </div>
            <div class="flex-col my-1">
                <label class="text-white mx-1 text-lg">Overarm</label>
                <label class="text-white opacity-80 text-sm">Inches</label>
                <select id="overarmInput" v-model="overarm" class="w-full rounded p-1">
                    <option value="0">Please select an option</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    <option value="45">45</option>
                    <option value="46">46</option>
                    <option value="47">47</option>
                    <option value="48">48</option>
                    <option value="49">49</option>
                    <option value="50">50</option>
                    <option value="51">51</option>
                    <option value="52">52</option>
                    <option value="53">53</option>
                    <option value="54">54</option>
                    <option value="55">55</option>
                    <option value="56">56</option>
                    <option value="57">57</option>
                    <option value="58">58</option>
                    <option value="59">59</option>
                    <option value="60">60</option>
                </select>
            </div>
            <div class="flex-col my-1">
                <label class="text-white mx-1 text-lg">Jacket Sleeve</label>
                <label class="text-white opacity-80 text-sm">Inches</label>
                <select id="jacketSleeveInput" v-model="jacketSleeve" class="w-full rounded p-1">
                    <option value="0">Please select an option</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                </select>
            </div>
            <div class="flex-col my-1">
                <label class="text-white mx-1 text-lg">Waist</label>
                <label class="text-white opacity-80 text-sm">Inches</label>
                <select id="waistInput" v-model="waist" class="w-full rounded p-1">
                    <option value="0">Please select an option</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    <option value="32">32</option>
                    <option value="33">33</option>
                    <option value="34">34</option>
                    <option value="35">35</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    <option value="45">45</option>
                    <option value="46">46</option>
                    <option value="47">47</option>
                    <option value="48">48</option>
                </select>
            </div>
            <div class="flex-col my-1">
                <label class="text-white mx-1 text-lg">Out Seam</label>
                <label class="text-white opacity-80 text-sm">Inches</label>
                <select id="outseamInput" v-model="outseam" class="w-full rounded p-1">
                    <option value="0">Please select an option</option>
                    <option value="35">35</option>
                    <option value="35.5">35.5</option>
                    <option value="36">36</option>
                    <option value="36.5">36.5</option>
                    <option value="37">37</option>
                    <option value="37.5">37.5</option>
                    <option value="38">38</option>
                    <option value="38.5">38.5</option>
                    <option value="39">39</option>
                    <option value="39.5">39.5</option>
                    <option value="40">40</option>
                    <option value="40.5">40.5</option>
                    <option value="41">41</option>
                    <option value="41.5">41.5</option>
                    <option value="42">42</option>
                    <option value="42.5">42.5</option>
                    <option value="43">43</option>
                    <option value="43.5">43.5</option>
                    <option value="44">44</option>
                    <option value="44.5">44.5</option>
                    <option value="45">45</option>
                    <option value="45.5">45.5</option>
                </select>
            </div>
            <div class="flex-col my-1">
                <label class="text-white mx-1 text-lg">Neck</label>
                <label class="text-white opacity-80 text-sm">Inches</label>
                <select id="neckInput" v-model="neck" class="w-full rounded p-1">
                    <option value="0">Please select an option</option>
                    <option value="13">13</option>
                    <option value="13.5">13.5</option>
                    <option value="14">14</option>
                    <option value="14.5">14.5</option>
                    <option value="15">15</option>
                    <option value="15.5">15.5</option>
                    <option value="16">16</option>
                    <option value="16.5">16.5</option>
                    <option value="17">17</option>
                    <option value="17.5">17.5</option>
                    <option value="18">18</option>
                    <option value="18.5">18.5</option>
                    <option value="19">19</option>
                    <option value="19.5">19.5</option>
                    <option value="20">20</option>
                </select>
            </div>
            <div class="flex-col my-1">
                <label class="text-white mx-1 text-lg">Shirt Sleeve</label>
                <label class="text-white opacity-80 text-sm">Inches</label>
                <select id="shirtSleeveInput" v-model="shirtSleeve" class="w-full rounded p-1">
                    <option value="0">Please select an option</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    <option value="32">32</option>
                    <option value="33">33</option>
                    <option value="34">34</option>
                    <option value="35">35</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                </select>
            </div>
            <div class="my-3">
                <button type="button" v-on:click="submitMeasurementsForm" class="p-1 bg-blue-600 rounded text-lg text-white">Submit Measurements</button>
            </div>
        </form>
    </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import { convertRangeInputToHeight } from '../utils/helpers';
import useVuelidate from '@vuelidate/core';
import { required, email, minLength, maxLength, alpha, helpers } from '@vuelidate/validators';

// Custom validator to allow alphabetic characters and spaces
const alphaSpaces = helpers.withParams(
  { message: 'Name must contain only alphabetic characters and spaces' },
  value => /^[A-Za-z\s]+$/.test(value)
);

// Custom validator to check if the value is not "Please select an option"
const defaultValue = helpers.withParams(
  { message: 'Please choose an option' },
  value => value !== "No options selected"
);

const clientName = ref('');
const clientEmail = ref('');
const eventName = ref('');
const eventRole = ref("No options selected");
const eventDate = ref('');
const weight = ref();
const shoeSize = ref(0);
const shoeWidth = ref("Regular");
const chest = ref(0);
const overarm = ref(0);
const jacketSleeve = ref(0);
const waist = ref(0);
const outseam = ref(0);
const neck = ref(0);
const shirtSleeve = ref(0);
const heightValue = ref(46);
const heightString = computed(() => {
    return convertRangeInputToHeight(heightValue.value)
})

const rules = {
  clientName: { required, minLength: minLength(2), maxLength: maxLength(50), alphaSpaces },
  clientEmail: { required, email },
  eventName: { required },
  eventRole: { required, defaultValue },
  eventDate: { required }
};

const v$ = useVuelidate(rules, { clientName, clientEmail, eventName, eventRole, eventDate });

const submitMeasurementsForm = () => {
    v$.value.$touch(); 
    if (v$.value.$invalid) {
        console.log('Form is invalid');
        Object.keys(rules).forEach(field => {
            if (v$.value[field].$errors) {
                v$.value[field].$errors.forEach(error => {
                console.log(`Field: ${field}, Rule: ${error.$validator}, Message: ${error.$message}`);
                });
            }
        });
        return;
    }
    const formData = {
        clientName: clientName.value,
        clientEmail: clientEmail.value,
        eventName: eventName.value,
        eventRole: eventRole.value,
        eventDate: eventDate.value,
        heightString: heightString.value,
        weight: weight.value,
        shoeSize: shoeSize.value,
        shoeWidth: shoeWidth.value,
        chest: chest.value,
        overarm: overarm.value,
        jacketSleeve: jacketSleeve.value,
        waist: waist.value,
        outseam: outseam.value,
        neck: neck.value,
        shirtSleeve: shirtSleeve.value
    }
    console.log(formData)
}

</script>