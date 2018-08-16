<template>
  <div id="test">
    <canvas width="1000px" height="800px"  @mousedown="mouseDownOnCanvas" @mousemove="mouseMoveOnCanvas" @mouseup="mouseUpOnCanvas" id="map"></canvas>
    <div class="footer">
      <span class="coordLabel">当前坐标x: {{mousePoint.x}}</span>
      <span class="coordLabel">当前坐标y: {{mousePoint.y}}</span>
      <button @click="clearPanel()">清除</button>
    </div>
  </div>
</template>

<script>
import Symbol from '@/symbol/symbol'
export default {
  name: 'canvasPanel',
  data() {
    return {
      mouseDown: false,
      penRoute: [],
      dom: null,
      ctx: null,
      currentSymbol: null,
      mousePoint: { x: null, y: null },
    };
  },
  methods: {
    mouseDownOnCanvas(event) {
      this.mouseDown = true;
      this.penRoute = [];
    },
    mouseMoveOnCanvas(event) {
      this.mousePoint.x = event.offsetX;
      this.mousePoint.y = event.offsetY;
      if (this.mouseDown) {
        this.penRoute.push([this.mousePoint.x, this.mousePoint.y]);
        if (this.penRoute.length > 1) {
          this.currentSymbol.draw(this.ctx, this.penRoute);
        }
      }
    },
    mouseUpOnCanvas(event) {
      this.mouseDown = false;
    },
    clearPanel() {
      this.ctx.clearRect(0, 0, this.dom.width, this.dom.height);
    }
  },
  mounted() {
    this.dom = document.getElementById('map');
    this.ctx = this.dom.getContext("2d");
    this.currentSymbol = new Symbol();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #test {
    height: 100%;
    flex-direction: column;
  }
  #map {
    border: 1px solid #ccc;
  }
  .footer {
    height: 150px;
  }
  .coordLabel {
    width: 130px;
    text-align: left;
    display: inline-block;
  }
</style>
