<template>
    <main class="xl:w-[80vw] xl:flex xl:flex-col xl:m-auto mx-2 bg-gray-800 rounded p-1">
        <form class="m-2">
            <div class="flex-col my-1">
                <label class="text-white mx-1 text-lg">First and Last Name</label>
                <input id="name" class="w-full rounded p-1" type="text" placeholder="John Doe">
            </div>
            <div class="flex-col my-1">
                <label class="text-white mx-1 text-lg">Email</label>
                <label class="text-white opacity-80 text-sm">we will only email you if we have any questions about your measurements</label>
                <input id="email" class="w-full rounded p-1" type="text" placeholder="JohnDoe@gmail.com">
            </div>
            <div class="flex-col my-1">
                <label class="text-white mx-1 text-lg">Wedding or Event Name</label>
                <label class="text-white opacity-80 text-sm">For weddings, use the name of the marrying couple</label>
                <input id="eventName" class="w-full rounded p-1" type="text" placeholder="John & Jane Doe's Wedding">
            </div>
            <div class="flex-col my-1">
                <label class="text-white mx-1 text-lg">Wedding or Event Role</label>
                <label class="text-white opacity-80 text-sm"></label>
                <input id="eventRole" class="w-full rounded p-1" type="text" placeholder="Ex. Groomsman, Father of the Bride">
            </div>
            <div class="flex-col my-1">
                <label class="text-white mx-1 text-lg">Wedding or Event Date</label>
                <label class="text-white opacity-80 text-sm"></label>
                <input id="eventDate" class="w-full rounded p-1" type="date" placeholder="">
            </div>
            <div class="flex-col my-1">
                <label class="text-white mx-1 text-lg">Height: </label>
                <input class="w-auto bg-gray-800 text-white" id="heightString" type="text" :value="heightString" readonly>
                <div>
                    <input class="" id="heightRange" type="range" min="1" max="72" v-model="heightValue" />
                </div>
            </div>
            <div class="flex-col my-1">
                <label class="text-white mx-1 text-lg">Weight</label>
                <label class="text-white opacity-80 text-sm">Pounds (lbs)</label>
                <input id="weight" class="w-full rounded p-1" type="number" min="10" max="400" placeholder="200">
            </div>
            <div class="flex-col my-1">
                <label class="text-white mx-1 text-lg">Shoe Size</label>
                <label class="text-white opacity-80 text-sm">US Men's</label>
                <select class="w-full rounded p-1">
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
                <select class="w-full rounded p-1">
                    <option value="Regular">Regular</option>
                    <option value="Wide">Wide</option>
                </select>
            </div>
            <div class="flex-col my-1">
                <label class="text-white mx-1 text-lg">Chest</label>
                <label class="text-white opacity-80 text-sm">Inches</label>
                <select class="w-full rounded p-1">
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
        </form>
    </main>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { convertRangeInputToHeight } from '../utils/helpers'

const heightValue = ref(46); // Default value
const heightString = computed(() => {
    return convertRangeInputToHeight(heightValue.value)
})
</script>