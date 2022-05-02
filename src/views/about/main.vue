<script>
import { Axios /* ResponseInterceptor */ } from 'utils';
export default {
  render() {
    return (
      <div class="about">
        <h1>This is an jsx about page</h1>
      </div>
    );
  },
  created() {
    // this.getUserList();
  },
  methods: {
    getUserList() {
      Axios.post(
        {
          url: '/userMangerController/getUserList',
          params: {
            province: '',
            city: '',
            county: '',
            startSearchTimeStr: '',
            endSearchTimeStr: '',
            keyWord: '',
            order: 0,
            pageIndex: 1,
            pageSize: 10
          }
        }
        /* {
          requestInterceptor: {
            handler: (config) => {
              console.log('req', config);
              return config;
            }
          },
          responseInterceptor: {
            handler: ResponseInterceptor.responseWithFormat
          }
        } */
      )
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          this.$message.error(
            typeof error === 'string' ? error : '查询失败,请稍后再试'
          );
        });
    }
  }
};
</script>
