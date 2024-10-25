import { Theme } from '../../styles/theme';

const tooltip = {
  enabled: true,
  useHTML: true,
  borderWidth: 2,
  borderColor: Theme.colors.white,
  zIndex: 10,
  padding: 20,
  formatter: function (this: Highcharts.TooltipFormatterContextObject) {
    const date = new Date(this.x as number);

    return `
      <div style="color: ${
        Theme.colors.black
      }; font-weight: bold; display: flex; flex-direction: column;">
        <div style="padding-bottom: 20px;">
            ${this.series.name}: ${this.y}
        </div>
        <div style="color: ${Theme.colors.gray500}">
            ${date.getUTCFullYear()}년 ${(date.getUTCMonth() + 1)
      .toString()
      .padStart(2, '0')}월 ${date.getUTCDate().toString().padStart(2, '0')}일
                  ${date.getUTCHours().toString().padStart(2, '0')}:${date
      .getUTCMinutes()
      .toString()
      .padStart(2, '0')}
        </div>
      </div>
    `;
  },
};

export default tooltip;
