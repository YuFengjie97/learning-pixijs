<template>
  <div class="viewCon" ref="pixiCon"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import * as PIXI from 'pixi.js'

import bunnyImg from '@/assets/img/texture/bunny.png'

const pixiCon = ref<HTMLElement>()

onMounted(() => {
  const app = new PIXI.Application({ background: '#1099bb' })
  pixiCon.value!.appendChild(app.view as HTMLCanvasElement)

  const container = new PIXI.Container()
  app.stage.addChild(container)

  const texture = PIXI.Texture.from(bunnyImg)
  for (let i = 0; i < 25; i++) {
    const bunny = new PIXI.Sprite(texture)
    bunny.anchor.set(0.5)
    bunny.x = (i % 5) * 40
    bunny.y = Math.floor(i / 5) * 40
    container.addChild(bunny)
  }

  container.x = app.screen.width / 2
  container.y = app.screen.height / 2

  container.pivot.x = container.width / 2
  container.pivot.y = container.height / 2

  app.ticker.add((delta) => {
    container.rotation -= 0.01 * delta
  })
})
</script>

<style lang="less" scoped>
.viewCon {
}
</style>
