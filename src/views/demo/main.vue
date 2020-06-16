<style lang="less" scoped src="./style.less"></style>
<script>
export default {
  render() {
    return (
      <div>
        <el-input v-model={this.inputText}></el-input>
        <span>{this.inputText}</span>
      </div>
    );
  },
  data() {
    return {
      inputText: ''
    };
  },
  methods: {}
};
</script>
