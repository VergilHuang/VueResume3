<script setup></script>

<template>
  <div class="contact">
    <section>
      <h1>{{ $t("contact_informations") }}</h1>
      <div class="p-3">
        <ul class="py-2 px-6 border-l-4 border-l-[#b2bee8]">
          <!-- <li class="py-1">
            <span class="text-xl font-bold text-gray-800 mr-2">Address:</span>
            <span class="text-lg font-normal text-gray-600">新北市五股區</span>
          </li>-->
          <li class="py-1">
            <span class="text-xl font-bold text-gray-800 mr-2"
              >{{ $t("job") }}:</span
            >
            <span class="text-lg font-normal text-gray-600">{{
              $t("frontend_engineer")
            }}</span>
          </li>
          <li class="py-1">
            <span class="text-xl font-bold text-gray-800 mr-2"
              >{{ $t("phone") }}:</span
            >
            <span class="text-lg font-normal text-gray-600"
              >+886 978-260-192</span
            >
          </li>
          <li class="py-1">
            <span class="text-xl font-bold text-gray-800 mr-2"
              >{{ $t("email") }}:</span
            >
            <span class="text-lg font-normal text-gray-600"
              >zaq9716643@gmail.com</span
            >
          </li>
          <li class="py-1">
            <span class="text-xl font-bold text-gray-800 mr-2"
              >{{ $t("github") }}:</span
            >
            <span class="text-lg font-normal text-gray-600"
              >https://github.com/VergilHuang</span
            >
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
