type LoadingColors =
  | 'white'
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'currentColor';
type NormalSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type NormalLoaders =
  | 'default'
  | 'points'
  | 'points-opacity'
  | 'gradient'
  | 'spinner';

export interface ILoader {
    isLoading: boolean;
    size?: NormalSizes;
    color?: LoadingColors;
    type?: NormalLoaders;
}