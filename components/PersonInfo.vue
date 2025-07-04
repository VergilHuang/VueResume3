<script setup>
import photo from "@/assets/img/vergil_photo.jpg";
const name = "Vergil Huang";
const birthday = "1989.01.06";
const email = "zaq9716643@gmail.com";
const github = "https://github.com/VergilHuang";
</script>

<template>
  <div class="person-info box-border shadower">
    <div>
      <div class="n-intro">
        <h3 class="n-name">Vergil Huang</h3>
        <h4 class="n-subtitle text-shine">Creative Designer</h4>
      </div>
      <div class="photo-container">
        <img class="vg-photo" :src="photo" alt="Vergil's Picture" />
      </div>
    </div>
    <div class="vg-info-container">
      <div class="vg-info-box">
        <div class="vg-info">
          <span class="info-icon"><i class="far fa-user"></i></span>
          <span class="info-title">Name</span>
          <p class="info">{{ name }}</p>
        </div>
        <div class="vg-info">
          <span class="info-icon"><i class="far fa-calendar-alt"></i></span>
          <span class="info-title">Birthday</span>
          <p class="info">{{ birthday }}</p>
        </div>
      </div>
      <div class="vg-info-box">
        <div class="vg-info">
          <span class="info-icon"><i class="far fa-envelope"></i></span>
          <span class="info-title">E-mail</span>
          <p class="info">{{ email }}</p>
        </div>
        <div class="vg-info">
          <span class="info-icon"><i class="fab fa-github"></i></span>
          <span class="info-title">Github</span>
          <p class="info">
            <a href="https://github.com/VergilHuang" title="Github link"></a>
            {{ github }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
