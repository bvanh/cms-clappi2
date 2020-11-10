<template>
  <div class="personal">
    <p class="title">Personal Info</p>
    <a-row class="info" :gutter="16">
      <a-col :span="3" class="control-label">User Name</a-col>
      <a-col :span="5">
        <a-input placeholder="Basic usage" />
      </a-col>
      <a-col :span="3" class="control-label">Gender</a-col>
      <a-col :span="5">
        <a-input placeholder="Basic usage" />
      </a-col>
      <a-col :span="3" class="control-label">Birth</a-col>
      <a-col :span="5">
        <a-input placeholder="Basic usage" />
      </a-col>
    </a-row>
    <a-row class="info" :gutter="16">
      <a-col :span="3" class="control-label">Id Card</a-col>
      <a-col :span="5">
        <a-input placeholder="Basic usage" />
      </a-col>
      <a-col :span="3" class="control-label">Date</a-col>
      <a-col :span="5">
        <a-input placeholder="Basic usage" />
      </a-col>
      <a-col :span="3" class="control-label">Where</a-col>
      <a-col :span="5">
        <a-input placeholder="Basic usage" />
      </a-col>
    </a-row>
    <a-row class="info" :gutter="16">
      <a-col :span="3" class="control-label">Address</a-col>
      <a-col :span="21">
        <a-input placeholder="Basic usage" />
      </a-col>
    </a-row>
     <p class="title">Contact Info</p>
     <a-row class="info" :gutter="16">
      <a-col :span="3" class="control-label">Mobile</a-col>
      <a-col :span="21">
        <a-input placeholder="Basic usage" />
      </a-col>
    </a-row>
    <a-row class="info" :gutter="16">
      <a-col :span="3" class="control-label">Email</a-col>
      <a-col :span="21">
        <a-input placeholder="Basic usage" />
      </a-col>
    </a-row>

  </div>
</template>

<script>
export default {};
</script>

<style src='./style.scss' lang='scss'>
</style>