import styles from './index.less';
import 'antd/dist/antd.css';
import { Link } from 'umi';
//注入antd的样式
import Com from './field/voidField';

function IndexPage() {
    return (
        <div>
            <h1 className={styles.title}>主页</h1>
            <Com />
        </div>
    );
}
export default IndexPage;