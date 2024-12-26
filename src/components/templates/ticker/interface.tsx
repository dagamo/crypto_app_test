import {ILineChartProps} from '@/components/molecules/line-chart/interface';

export interface ITickerTemplateChildren {
  children: React.ReactNode;
  isLoading: boolean;
  timer: number;
}
export interface ITickerTemplateProps {
  LineChart: React.FC<ILineChartProps>;
}
