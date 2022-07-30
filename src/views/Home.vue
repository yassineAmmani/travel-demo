<template>
  <div class="home">
    <div id="header" ref="header" :style="{ 'background-size': yscroll+'%' }" :scroll="handleScroll" ></div>

  </div>
  <section>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, quo similique eligendi necessitatibus nihil expedita harum perspiciatis molestias, possimus tempora nulla aspernatur. Soluta id hic sequi repellendus, perspiciatis ea totam?
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, dicta nobis vero praesentium eum possimus consectetur suscipit perferendis saepe obcaecati recusandae libero! Animi tempora consequatur, laboriosam nisi quasi possimus ut dolore inventore voluptatibus illum quam. Ex officia assumenda at voluptatem magni, laudantium iusto minima nostrum perferendis quam repudiandae ipsam, nesciunt beatae hic distinctio vero ipsum repellat eligendi, consectetur provident facere iure sunt! Possimus nostrum commodi totam, dignissimos inventore ad nisi excepturi quibusdam deserunt eos enim culpa quidem non iste blanditiis expedita rem quasi dolorem cumque cum aliquid corrupti architecto, repudiandae tempora. Illum consectetur asperiores doloribus consequuntur. Fugit delectus blanditiis nesciunt ducimus animi amet officia eos, consectetur ab tempora rem commodi enim temporibus ipsam deserunt, quo vel. Dolorem eveniet, laudantium ut fuga eos ea fugit repudiandae aspernatur quis atque consectetur quae qui esse doloribus. Possimus, quam voluptas, natus blanditiis obcaecati vitae ab nesciunt nobis id delectus similique consequuntur iure necessitatibus architecto. Voluptates ullam temporibus, iste, ab pariatur quis accusantium aut suscipit autem quos dicta necessitatibus libero nostrum, ratione nesciunt cupiditate odio. Aut fuga, enim tempora inventore ea, ducimus quaerat ratione eaque cupiditate laboriosam quia necessitatibus placeat repellat modi maxime fugit? Voluptates, excepturi distinctio impedit, eligendi nemo sit vero molestias blanditiis ad, ea et? Corrupti est placeat commodi at dicta laborum. Architecto explicabo modi aspernatur accusantium recusandae odit rem harum minus nemo ducimus obcaecati dolorem quibusdam reiciendis maiores, sapiente aperiam nostrum sed voluptate iusto dolores? Ex maxime fugit repellendus itaque nobis natus consequuntur amet maiores, pariatur officiis harum explicabo numquam sapiente modi voluptatum aperiam, voluptas sequi incidunt quis ipsam illo neque? Reprehenderit enim dolor labore beatae voluptates error ex laborum rerum aut quos! Odio ducimus laudantium officiis autem exercitationem, incidunt sint magni, rerum minus error, dolore debitis ipsum facilis iure doloribus dolor veniam aut eaque! Incidunt minima itaque distinctio doloremque iste! Amet quam non, reiciendis iusto quidem eum ut. Impedit saepe cupiditate nulla alias est molestiae quia dolorem veniam voluptates aut eius nam, illo iste voluptatem necessitatibus consequatur ut beatae culpa natus asperiores reprehenderit voluptatum eos? Quod, sit ad corrupti veritatis aliquam ab ex repellendus dicta nam perferendis corporis fugit dolorum aspernatur, recusandae, itaque error? Vitae provident, tempora sint hic quod quibusdam deserunt, assumenda placeat inventore aperiam in eaque asperiores dolore autem accusantium tenetur maxime. Natus possimus esse quia quis nisi quibusdam eius eveniet nulla nobis deleniti, consectetur ut reiciendis odit fuga delectus illum odio dignissimos, incidunt ratione sequi quo culpa magnam recusandae? Ipsum quisquam commodi sequi dolore, a quaerat qui veniam dolorem adipisci dignissimos odio deserunt, eum ea nihil id error saepe vel harum iusto iste aut voluptatem, voluptate quo. Omnis veritatis animi quis quod eaque molestiae repellendus iste dolorum, sequi id, ullam excepturi explicabo culpa alias minus sunt debitis. Nobis repudiandae dolorem minus esse, autem recusandae optio saepe, eos natus ducimus deleniti! Eius neque a excepturi maiores quisquam, nostrum velit quas dolorum beatae minima ducimus temporibus reiciendis eos quia incidunt ea, inventore distinctio ratione asperiores iure nemo consequatur? Repudiandae, voluptate odit. Expedita minus cumque ducimus nostrum ea optio culpa. Eaque.
    s
  </section>
</template>

<script >
import debounce from 'lodash/debounce'
export default {
  name: 'Home',
   data(){
     return{
      message: 'welcome',
      bg : this.$refs.header,
      yscroll : 100
     }
  },
  methods: {
    handleScroll(event) {
      // Any code to be executed when the window is scrolled
      this.isUserScrolling = (window.scrollY > 0);
      this.t = window.scrollY ;
           this.yscroll = 100+window.scrollY*0.12;
      
      
 
      
    }
  },
 

  mounted() {
    this.handleDebouncedScroll = debounce(this.handleScroll, 2);
    window.addEventListener('scroll', this.handleDebouncedScroll);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleDebouncedScroll);
  }
}
</script>

<style scoped>
#header{
  position: relative;
  width: 100%;
  height: 100vh;
  background: url(../assets/kasba.jpg);
  background-size: 100%;
  background-position: center;
  background-attachment: fixed;
}
section{
  padding: 100px;
  color: #111;
}
</style>