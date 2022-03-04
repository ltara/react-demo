//此处的规则供参考，其中多半其实都是默认值，可以根据个人习惯改写
module.exports = {
  /**
   * 设置prettier单行输出（不折行）的（最大）长度
   * 默认值：80
   */
  printWidth: 80,

  /**
   * 设置工具每一个水平缩进的空格数
   * 默认值：2
   */
  tabWidth: 2,

  /**
   * 使用tab（制表位）缩进而非空格
   * 默认值：false
   */
  useTabs: false,

  /**
   * 在语句末尾添加分号
   * 默认值： false
   * 有效参数：
   *  true  - 在每一条语句后面添加分号
   *  false - 只在有可能导致ASI错误的行首添加分号
   */
  semi: false,

  /**
   * 使用单引号而非双引号
   * 默认值： false
   */
  singleQuote: true,

  /**
   * 当引用对象中的属性时更改
   * 有效参数：
   *  as-needed  - 只在需要的地方在对象属性周围加引号
   *  consistent - 如果一个对象中至少有一个属性需要引用，则引用所有属性
   *  preserve   - 尊重对象属性中引号的输入使用
   */
  // quoteProps: '<as-needed|consistent|preserve>',

  /**
   * jsx中使用单引号而非双引号
   * 默认值： false
   */
  jsxSingleQuote: true,

  /**
   * 尽可能在多行逗号分隔的语法结构中打印尾随逗号。
   * 有效参数：
   *  none - 无尾逗号；
   *  es5  - 添加es5中被支持的尾逗号；
   *  all  - 所有可能的地方都被添加尾逗号；（包括函数参数），这个参数需要安装nodejs8或更高版本；
   */
  trailingCommas: 'none',

  /**
   * 在对象字面量声明所使用的的花括号后（{）和前（}）输出空格
   * 有效参数：
   *  true  - Example: { foo: bar }
   *  false - Example: {foo: bar}
   */
  bracketSpacing: true,

  /**
   * 把 ">" 放在多行HTML (HTML, JSX, Vue, Angular)元素最后一行的末尾，而不是单独放在下一行(不适用于自闭元素)。
   * 默认值：false
   * 有效参数：
   *  true  - 放在最后一行末尾
   *  false - 单独一行
   */
  bracketSameLine: false,

  /**
   * 为单行箭头函数的参数添加圆括号
   * 有效参数：
   *  avoid  - 尽可能不添加圆括号，示例：x => x
   *  always - 总是添加圆括号，示例： (x) => x
   */
  arrowParens: 'avoid',

  /**
   * Prettier可以将自己限制为只格式化在文件顶部包含特殊注释(称为pragma)的文件
   * 默认值： false
   * 有效参数：
   *  true  - 需要顶部注释才使用格式化
   *  false - 无需顶部注释即可格式化
   */
  requirePragma: false,

  /**
   * Prettier可以在文件的顶部插入一个 @format的特殊注释，以表明改文件已经被Prettier格式化过了
   * 默认值： false
   * 有效参数：
   *  true  - 在已被preitter格式化的文件顶部加上标注
   *  false - 不加标注
   */
  insertPragma: false,

  /**
   * 默认情况下，Prettier会因为使用了一些折行敏感型的渲染器（如GitHub comment 和 BitBucket）而按照markdown文本样式进行折行，
   * 但在某些情况下，你可能只是希望这个文本在编译器或查看器中soft-wrapping（是当屏幕放不下时发生的软折行），所以这一参数允许设置为 "never"
   * 有效参数：
   *  always   - 当超出print width（上面有这个参数）时就折行
   *  never    - 不折行
   *  perserve - 按照文件原样折行
   */
  // proseWrap: '<always|never|preserve>',

  /**
   * 为HTML、Vue、Angular和 Handlebars 指定全局空格敏感性
   * 有效参数：
   *  css    - 遵守css显示属性的默认值。对于Handlebars的处理同样严格
   *  strict - 所有标签周围的空格(或没有空格)被认为是有效的
   *  ignore - 所有标签周围的空格(或没有空格)被认为是无效的
   */
  // htmlWhitespaceSensitivity: '<css|strict|ignore>',

  /**
   * 是否缩进Vue文件中的<script>和<style>标签
   * 有效参数：
   *  true  - 在Vue文件中缩进<script>和<style>标签
   *  false - 不在Vue文件中缩进<script>和<style>标签
   */
  // vueIndentScriptAndStyle: '<bool>',

  /**
   * 由于历史原因，文本文件中存在两种常见的行结束符。这是\n(或LF换行)和\r\n(或CRLF回车+换行)。前者在Linux和macOS上很常见，而后者在Windows上很流行
   * 有效参数：
   *  lf   - 只能换行(\n)，在Linux和macOS上很常见，在git repos内部也很常见
   *  crlf - 回车+换行字符(\r\n)，在Windows上很常见
   *  cr   - 回车只返回字符(\r)，很少使用
   *  auto - 保持现有的行结束符
   */
  endOfLine: 'lf',

  /**
   * 控制Prettier是否将引用代码嵌入到文件中
   * 有效参数：
   *  auto - 格式化嵌入代码如果 Prettier 可以自动识别它
   *  off  - 永远不会自动格式化嵌入代码
   */
  // embeddedLanguageFormatting: '<auto|off>', // 对引用代码进行格式化
};
