import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgChartsModule } from 'ng2-charts';
import { SmdChipComponent } from '../smd-widgets/smd-chip/smd-chip.component';
import { SmdRadioComponent } from '../smd-widgets/smd-radio/smd-radio.component';
import { SmdButtonAnswerComponent } from '../smd-widgets/smd-button-answer/smd-button-answer.component';
import { SmdNumberSpinnerComponent } from '../smd-widgets/smd-number-spinner/smd-number-spinner.component';
import { SmdCheckboxComponent } from '../smd-widgets/smd-checkbox/smd-checkbox.component';
import { SmdItemListComponent } from '../smd-widgets/smd-item-list/smd-item-list.component';
import { SmdScoreSelectComponent } from '../smd-widgets/smd-score-select/smd-score-select.component';
import { SmdCourseCardComponent } from '../smd-widgets/smd-course-card/smd-course-card.component';
import { SmdPlayControlBarComponent } from '../smd-widgets/smd-play-control-bar/smd-play-control-bar.component';
import { SmdOverlayGuideComponent } from '../smd-widgets/smd-overlay-guide/smd-overlay-guide.component';
import { SmdHeader1Component } from '../smd-widgets/smd-header1/smd-header1.component';
import { SmdCircleDiagramComponent } from '../smd-widgets/smd-circle-diagram/smd-circle-diagram.component';
import { SmdQuotationMessageCardComponent } from '../smd-widgets/smd-quotation-message-card/smd-quotation-message-card.component';
import { Smd3ThoughtFlowDiagramComponent } from '../smd-widgets/smd3-thought-flow-diagram/smd3-thought-flow-diagram.component';
import { SmdCardComponent } from '../smd-widgets/smd-card/smd-card.component';
import { SmdReorderComponent } from '../smd-widgets/smd-reorder/smd-reorder.component';
import { SmdArrowComponent } from '../smd-widgets/smd-arrow/smd-arrow.component';
import { SmdActionPlannerComponent } from '../smd-widgets/smd-action-planner/smd-action-planner.component';
import { SmdTipBoxComponent } from '../smd-widgets/smd-tip-box/smd-tip-box.component';
import { SmdProgramsGuideCardComponent } from '../smd-widgets/smd-programs-guide-card/smd-programs-guide-card.component';
import { SmdRangeComponent } from '../smd-widgets/smd-range/smd-range.component';
import { SmdChipSelectComponent } from '../smd-widgets/smd-chip-select/smd-chip-select.component';
import { SmdProgramFooterComponent } from '../smd-widgets/smd-program-footer/smd-program-footer.component';
import { SmdEmotionScoreViewComponent } from '../smd-widgets/smd-emotion-score-view/smd-emotion-score-view.component';
import { SmdDiagram1Component } from '../smd-widgets/smd-diagram1/smd-diagram1.component';
import { SmdPanicLogCardViewComponent } from '../smd-widgets/smd-panic-log-card-view/smd-panic-log-card-view.component';
import { SmdWeeklyScoreChartComponent } from '../smd-widgets/smd-weekly-score-chart/smd-weekly-score-chart.component';


@NgModule({
  declarations: [
    SmdChipComponent,
    SmdRadioComponent,
    SmdButtonAnswerComponent,
    SmdNumberSpinnerComponent,
    SmdCheckboxComponent,
    SmdItemListComponent,
    SmdScoreSelectComponent,
    SmdCourseCardComponent,
    SmdPlayControlBarComponent,
    SmdOverlayGuideComponent,
    SmdHeader1Component,
    SmdCircleDiagramComponent,
    SmdQuotationMessageCardComponent,
    Smd3ThoughtFlowDiagramComponent,
    SmdCardComponent,
    SmdReorderComponent,
    SmdArrowComponent,
    SmdActionPlannerComponent,
    SmdTipBoxComponent,
    SmdProgramsGuideCardComponent,
    SmdRangeComponent,
    SmdChipSelectComponent,
    SmdProgramFooterComponent,
    SmdEmotionScoreViewComponent,
    SmdPanicLogCardViewComponent,
    SmdDiagram1Component,
    SmdWeeklyScoreChartComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
    NgChartsModule,
  ],
  exports: [
    IonicModule,
    SmdChipComponent,
    SmdRadioComponent,
    SmdButtonAnswerComponent,
    SmdNumberSpinnerComponent,
    SmdCheckboxComponent,
    SmdItemListComponent,
    SmdScoreSelectComponent,
    SmdCourseCardComponent,
    SmdPlayControlBarComponent,
    SmdOverlayGuideComponent,
    SmdHeader1Component,
    SmdCircleDiagramComponent,
    SmdQuotationMessageCardComponent,
    Smd3ThoughtFlowDiagramComponent,
    SmdCardComponent,
    SmdReorderComponent,
    SmdArrowComponent,
    SmdActionPlannerComponent,
    SmdTipBoxComponent,
    SmdProgramsGuideCardComponent,
    SmdRangeComponent,
    SmdChipSelectComponent,
    SmdProgramFooterComponent,
    SmdEmotionScoreViewComponent,
    SmdPanicLogCardViewComponent,
    SmdDiagram1Component,
    SmdWeeklyScoreChartComponent,
  ]
})
export class SharedModule { }
