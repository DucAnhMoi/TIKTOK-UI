import classNames from 'classnames/bind';
import styles from './Popper.module.scss';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Wrapper() {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('search-title')}>Accounts</h4>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
        </div>
    );
}
export default Wrapper;
