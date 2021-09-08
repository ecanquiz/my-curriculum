<template>

<div class="mt-6 pb-8 lg:pb-8 w-4/5 mx-auto flex flex-wrap items-center justify-between">
          <a class="link" href="#" data-tippy-content="@facebook_handle"><icon name="facebook" /></a>
          <a class="link" href="#" data-tippy-content="@twitter_handle"><icon name="twitter" /></a>
          <a class="link" href="#" data-tippy-content="@github_handle"><icon name="github" /></a>
          <a class="link" href="#" data-tippy-content="@unsplash_handle"><icon name="unsplash" /></a>
          <a class="link" href="#" data-tippy-content="@dribble_handle"><icon name="dribbble" /></a>
          <a class="link" href="#" data-tippy-content="@instagram_handle"><icon name="instagram" /></a>
          <a class="link" href="#" data-tippy-content="@youtube_handle"><icon name="youtube" /></a>
    </div>
  
</template>

<script>
import Icon from '@/components/Icon'

export default {
components: {    
    Icon
  }
  
}
</script>

<style scoped></style>
