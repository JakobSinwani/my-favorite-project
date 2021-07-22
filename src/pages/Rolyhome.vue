<template>
<div class="container">
  <h3>Add Folder</h3>
  <div class="folder-form">
    <q-input label="name" v-model="folder.name"/>
    <q-input label="type" v-model="folder.type"/>
    <p>{{folder.id}}</p>
    <q-btn label="insert" @click="insert(folder,'folders', uid  , 'userFolders')"/>
  </div>
  <h3>Add Project</h3>
  <div class="folder-form">
    <q-input label="project name" v-model="project.name"/>
    <q-input label="project type" v-model="project.type"/>
    <p>{{project.id}}</p>
    <q-btn label="insert" @click="insert(project,'projects' , folder.id, 'ProjectsOfCurrentFolder')"/>
  </div>
  <h3>Add Building</h3>
  <div class="folder-form">
    <q-input label="project name" v-model="building.name"/>
    <q-input label="project type" v-model="building.type"/>
    <p>{{building.id}}</p>

    <h1>{{phone}}</h1>
    <q-btn label="insert" @click="insert(building,'buildings', project.id, 'buildingsOfProject')"/>
  </div>
</div>
</template>

<script>
import {mapActions, mapState, mapMutations} from 'vuex';
import fbi from '../middleware/firebaseAPI/index'
export default {

  name: "Rolyhome",
  created() {
    console.log(this.$parent.$store._actions , 'parent')
    },
  data(){
    return{
      uid: 'ICxsEAAKFug8iCCnP9NW0UkOljG2',
      folder: {
        name:'',
        type: '',
        id: ''
      },
      project: {
        name:'',
        type: '',
        id: ''
      },
      building: {
        name:'',
        type: '',
        id: ''
      }
    }
  },
  computed: {
    ...mapState('payments', ['phone'])
  },
  methods: {
    async insert(item ,rootCollection, prevId, subCollection){

      item.id = await (fbi.db().collection('test').doc().id)

      await fbi.db().collection(rootCollection).doc(prevId)
            .collection(subCollection).doc(item.id)
            .set(item)
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: column;
}
.folder-form {
  margin: 30px;
  height: 300px;
  width: 200px;
  background: #aaaaaa;
}
</style>
