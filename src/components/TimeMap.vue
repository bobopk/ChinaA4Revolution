<template>
  <div class="hello">
    <div id="timeline"></div>
    <div id="mapDiv">
    <l-map v-if="timelineLoaded" ref="map" style="height: 100%; width: 100%" :zoom="zoom" :center="center">
      <l-tile-layer :url="baseLayer.url" :attribution="baseLayer.attribution"></l-tile-layer>
      <l-marker @click="changeSlide(pos_id)" v-for="(pos, pos_id) in positions" :key="pos_id" :lat-lng="pos"></l-marker>
    </l-map>
    </div>
  </div>
</template>

<script>

// eslint-disable-next-line
import { Timeline } from '@knight-lab/timelinejs'
import '@knight-lab/timelinejs/dist/css/timeline.css'
import "leaflet/dist/leaflet.css"
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import 'leaflet-defaulticon-compatibility';

export default {
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
      timeline: {},
      timelineLoaded: false,
      zoom: 10,
      center: [],
      positions: {},
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
        let slide = this.timeline.getData(i)['Location_Original'].split(',').map(Number)
        if (i == 0) 
          firstSlideId = this.timeline.getSlide(i).data.unique_id
        this.positions[this.timeline.getSlide(i).data.unique_id] = slide
      }
      this.center = this.positions[firstSlideId]
    })

    this.timeline.on('change', (ev) => {
      this.changeMapPoint(ev)
    })
  },

  methods: {
    changeMapPoint (ev) {
      if (this.$refs.map) {
        this.$refs.map.mapObject.flyTo(this.positions[ev.unique_id])
      }
    },
    changeSlide (pos_id) {
      this.timeline.goToId(pos_id)
    }
  }
}
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

#timeline {
  height: 100%;
  min-height: 100%;
  width: 70%;
  float: left;
}

#mapDiv {
  height: 100%;
  width: 30%;
  float: right;
}
</style>
