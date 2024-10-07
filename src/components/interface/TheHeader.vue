<template>
  <nav class="navbar bg-body-tertiary border">
    <div class="container-fluid d-flex justify-content-between">
      <slot name="title">
        <h4>Title</h4>
      </slot>
      <slot name="button">
        <button class="btn btn-light">Button</button>
      </slot>
    </div>
  </nav>
</template>