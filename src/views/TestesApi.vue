<template>
	<div>
		<header>
			<h1>My Anime Feed</h1>
		</header>
		<main>
			<Post v-for="(anime, i) in anime_list" :key="i" :anime="anime" />
		</main>
	</div>
</template>

<script>
import Post from "@/components/Post.vue";

export default {
	name: "App",
	data() {
		return {
			anime_list: [],

		};
	},

  components: {
		Post,
	},

  methods: {
		getAnime() {
     

			const anime_titles = [
				this.user,
				"Demon Slayer",
				"Dragon Ball",
				"My Hero Academia",
				"Sword Art Online",
				"Tokyo Ghoul",
				"Darling in the Franxx",
				"Code Geass",
				"One Piece",
				"Fairy Tail",
				"Bleach",
				"Attack on Titan",
				"Hunter x Hunter",
			];

			const anime = [];
      
			for (let i = 0; i < 10; i++) {
				anime.push({
					title: anime_titles[
						Math.floor(Math.random() * anime_titles.length)
					],
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				});
			}
			return anime;
		},

		handleScroll() {
			if (
				window.scrollY + window.innerHeight >=
				document.body.scrollHeight - 50
			) {
				const new_anime = this.getAnime();
				this.anime_list = [...this.anime_list, ...new_anime];
			}
		},

	},

	mounted() {
		this.anime_list = this.getAnime();
		window.addEventListener("scroll", this.handleScroll);
	},
};
</script>

<style scoped>
* {
	margin: 0;
	box-sizing: border-box;
}
body {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #fff;
	background-color: #2c3e50;
	min-height: 100vh;
	padding-top: 3rem;
}
header h1 {
	text-align: center;
}
header {
	margin-bottom: 2rem;
}
main {
	padding: 0 2rem;
	max-width: 640px;
	margin: 0 auto;
}
</style>
<!-- <template>
  <div>
    <ul>
      <li 
      v-for="post in laravelData" 
      :key="post.id"
      >

        {{ post.title }}
        {{ post.description }}
      </li>
    </ul>

    <Bootstrap5Pagination
      data="laravelData"
      @pagination-change-page="getResults"
  />
  </div>
</template>

<script>
import { ref } from 'vue';
import { TailwindPagination, Bootstrap5Pagination } from 'laravel-vue-pagination';
import axios from '@/services/api';

export default {
  // const laravelData = ref({});
  components:{
    Bootstrap5Pagination

  },

  data () {
    return {
      laravelData: {},

    }
  },

  mounted() {
    this.getResults();
  },


  methods: {
    getResults(page = 1){
      axios.get('https://jsonplaceholder.typicode.com/posts?page=' + page)
      .then((response) => {

        this.laravelData = response.data;
        console.log(laravelData.value);
      })
    },
    },  

  //  this.getResults();


}

</script> -->



<!-- <template>
  <div id="app">
    <h1 class="title">Teste paginação</h1>
    <div class="list">
      <div 
        v-for="passenger in passengers" 
        :key="passenger._id" class="card">
        <strong>{{ passenger.name }}</strong>
        <strong>{{ passenger.id }}</strong>
        <span class="tag">{{ passenger.description }}</span>
      </div>
    </div>
    <pagination
      v-if="passengers.length"
      :offset="offset"
      :total="total"
      :limit="limit"
      @change-page="changePage"
    />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';

const axios = require('axios');
export default {
  name: 'App',
  components: {
    Pagination,
  },
  data() {
    return {
      passengers: [],
      offset: 0,
      total: 0,
      limit: 50,
    };
  },
  methods: {
    changePage(value) {

      this.offset = value;
      this.getPassengers();
    },

    getPassengers() {

      const BASE_URL = 'https://jsonplaceholder.typicode.com';
      const url = `${BASE_URL}/posts?page=${this.offset}&size=${this.limit}`;

      axios.get(url).then(({ data }) => {
        
        this.passengers = data.data;
        this.total = data.totalPassengers;

        console.log(data);
      });
    },
  },
  mounted() {
    this.getPassengers();
  },
};
</script> -->