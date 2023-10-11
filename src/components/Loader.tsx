import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

interface LoaderProps {
	size: number;
	mTop: string;
}

export const Loader = ({ size, mTop }: LoaderProps) => {
	const antIcon = <LoadingOutlined style={{ fontSize: size, color: 'skyblue' }} spin />;
	return <Spin indicator={antIcon} style={{ width: '100%', marginTop: mTop }} />;
};
