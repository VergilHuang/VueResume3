<script setup lang="ts">
interface ContactInfo {
  job: string;
  phone: string;
  email: string;
  github: string;
}

// 聯絡資訊資料
const contactInfo: ContactInfo = {
  job: "frontend_engineer",
  phone: "+886 978-260-192",
  email: "zaq9716643@gmail.com",
  github: "https://github.com/VergilHuang",
};

// 聯絡資訊項目配置
const contactItems = [
  { key: "job", value: contactInfo.job, isI18n: true },
  { key: "phone", value: contactInfo.phone, isI18n: false },
  { key: "email", value: contactInfo.email, isI18n: false },
  { key: "github", value: contactInfo.github, isI18n: false },
];
</script>

<template>
  <div class="contact">
    <section>
      <h1>{{ $t("contact_informations") }}</h1>
      <div class="p-3">
        <ul class="py-2 px-6 border-l-4 border-l-[#b2bee8]">
          <li v-for="item in contactItems" :key="item.key" class="py-1">
            <span class="text-xl font-bold text-gray-800 mr-2">
              {{ $t(item.key) }}:
            </span>
            <span class="text-lg font-normal text-gray-600">
              {{ item.isI18n ? $t(item.value) : item.value }}
            </span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
