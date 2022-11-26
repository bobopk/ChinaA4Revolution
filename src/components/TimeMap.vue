<template>
  <div class="hello">
    <div id="timeline"></div>
    <div id="mapDiv">
    <l-map v-if="timelineLoaded" ref="map" style="height: 100%; width: 100%" :zoom="zoom" :center="center">
      <l-tile-layer :url="baseLayer.url" :attribution="baseLayer.attribution"></l-tile-layer>
      <l-marker
        v-for="(pos, pos_id) in positions"
        :key="pos_id"
        :lat-lng="pos"
        @click="changeSlide(pos_id)">
        </l-marker>
    </l-map>
    </div>
  </div>
</template>

<script lang="ts">
interface genericObject {[key: string]: any}
interface leafletEvent extends CustomEvent {
  unique_id: any
}

import { defineComponent } from 'vue'
import { Timeline } from '@knight-lab/timelinejs'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import '@knight-lab/timelinejs/dist/css/timeline.css'
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet"

export default defineComponent({
  name: 'TimeMap',
  components: { LMap,
                'l-tile-layer': LTileLayer,
                LMarker
                },
  props: {
    docId: String
  },
  data () {
    return {
      timeline: {} as genericObject,
      timelineLoaded: false,
      zoom: 10,
      center: [],
      positions: {} as genericObject,
      baseLayer: {
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution:
          '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      },
    }
  },
  mounted () {
    this.timeline = new Timeline('timeline', this.docId, { sheets_proxy: ''})
    this.timeline.on('loaded', () => {
      this.timelineLoaded = true
      let numSlides = this.timeline._storyslider.data.events.length
      let firstSlideId = ''
      for (let i = 0; i < numSlides; ++i) {
        let slidePosition = [] 
        let slideData = this.timeline.getData(i)
        if ('lat' in slideData && 'lon' in slideData) {
          slidePosition = [slideData['lat'], slideData['lon']]
        } else if ('Location_Original' in slideData) {
          slidePosition = slideData['Location_Original'].split(',').map(Number)
        } else if ('Location' in slideData) {
          slidePosition = slideData['Location'].split(',').map(Number)
        }
        if (i == 0) firstSlideId = this.timeline.getSlide(i).data.unique_id
        this.positions[this.timeline.getSlide(i).data.unique_id] = slidePosition
      }
      this.center = this.positions[firstSlideId]
    })

    this.timeline.on('change', (ev: leafletEvent) => {
      this.changeMapPoint(ev)
    })
  },

  methods: {
    changeMapPoint (ev: leafletEvent) {
      console.log(this.$refs.map)
      if (this.$refs.map) {
        const leafletMap = this.$refs.map as genericObject
        leafletMap.leafletObject.flyTo(this.positions[ev.unique_id])
      }
    },
    changeSlide (pos_id: string | number) {
      this.timeline.goToId(pos_id)
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.hello {
  height: 100%;
}

:deep(#timeline) {
  height: 100%;
  min-height: 100%;
  width: 70%;
  float: left;
}

:deep(#mapDiv) {
  height: 100%;
  width: 30%;
  float: right;
}
</style>
