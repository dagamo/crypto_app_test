import {ILineChartProps} from '@/components/molecules/line-chart/interface';

export interface ITickerTemplateChildren {
  children: React.ReactNode;
  isLoading: boolean;
  timer: number;
  getImage: () => string;
}
export interface ITickerTemplateProps {
  LineChart: React.FC<ILineChartProps>;
}
