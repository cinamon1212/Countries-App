import { Pagination, ConfigProvider, Space } from 'antd';
import { StPagePagination } from './StPagePagination';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setCurrentPage } from '../../store/countriesSlice';

export const PagePagination = () => {
  const { theme, currentPage, filteredCountries, pageSize } = useAppSelector(
    (state) => state.countries
  );
  const dispatch = useAppDispatch();

  return (
    <StPagePagination>
      <ConfigProvider
        theme={{
          token: {
            colorText: theme === 'dark' ? 'white' : 'black',
            fontSize: 20,
            colorPrimary: 'skyblue',
            colorTextDisabled: theme === 'dark' ? 'white' : 'black',
            colorBgBase: theme === 'dark' ? 'hsl(207, 26%, 17%)' : '',
            colorBgTextHover:
              theme === 'dark' ? 'hsl(209, 23%, 22%)' : 'hsl(207, 26%, 90%)',
          },
          components: {
            Pagination: {
              itemActiveBg:
                theme === 'dark' ? 'hsl(209, 23%, 22%)' : 'hsl(207, 26%, 90%)',
              itemSize: 40,
            },
          },
        }}
      >
        <Space>
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={filteredCountries.length}
            showSizeChanger={false}
            onChange={(e) => {
              dispatch(setCurrentPage(e));
              window.scrollTo(0, 0);
            }}
          />
        </Space>
      </ConfigProvider>
    </StPagePagination>
  );
};
