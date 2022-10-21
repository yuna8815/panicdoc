import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgChartsModule } from 'ng2-charts';
import { SmdChipComponent } from '../00.component/smd-chip/smd-chip.component';
import { SmdRadioComponent } from '../00.component/smd-radio/smd-radio.component';
import { SmdButtonAnswerComponent } from '../00.component/smd-button-answer/smd-button-answer.component';
import { SmdNumberSpinnerComponent } from '../00.component/smd-number-spinner/smd-number-spinner.component';
import { SmdCheckboxComponent } from '../00.component/smd-checkbox/smd-checkbox.component';
import { SmdItemListComponent } from '../00.component/smd-item-list/smd-item-list.component';
import { SmdScoreSelectComponent } from '../00.component/smd-score-select/smd-score-select.component';
import { SmdCourseCardComponent } from '../00.component/smd-course-card/smd-course-card.component';
import { SmdPlayControlBarComponent } from '../00.component/smd-play-control-bar/smd-play-control-bar.component';
import { SmdOverlayGuideComponent } from '../00.component/smd-overlay-guide/smd-overlay-guide.component';
import { SmdHeader1Component } from '../00.component/smd-header1/smd-header1.component';
import { SmdCircleDiagramComponent } from '../00.component/smd-circle-diagram/smd-circle-diagram.component';
import { Smd3ThoughtFlowDiagramComponent } from '../00.component/smd3-thought-flow-diagram/smd3-thought-flow-diagram.component';
import { SmdQuotationMessageCardComponent } from '../00.component/smd-quotation-message-card/smd-quotation-message-card.component';
import { SmdCardComponent } from '../00.component/smd-card/smd-card.component';
import { SmdReorderComponent } from '../00.component/smd-reorder/smd-reorder.component';
import { SmdArrowComponent } from '../00.component/smd-arrow/smd-arrow.component';
import { SmdActionPlannerComponent } from '../00.component/smd-action-planner/smd-action-planner.component';
import { SmdTipBoxComponent } from '../00.component/smd-tip-box/smd-tip-box.component';
import { SmdProgramsGuideCardComponent } from '../00.component/smd-programs-guide-card/smd-programs-guide-card.component';
import { SmdRangeComponent } from '../00.component/smd-range/smd-range.component';
import { SmdChipSelectComponent } from '../00.component/smd-chip-select/smd-chip-select.component';
import { SmdProgramFooterComponent } from '../00.component/smd-program-footer/smd-program-footer.component';
import { SmdEmotionScoreViewComponent } from '../00.component/smd-emotion-score-view/smd-emotion-score-view.component';
import { SmdPanicLogCardViewComponent } from '../00.component/smd-panic-log-card-view/smd-panic-log-card-view.component';
import { SmdDiagram1Component } from '../00.component/smd-diagram1/smd-diagram1.component';
import { SmdWeeklyScoreChartComponent } from '../00.component/smd-weekly-score-chart/smd-weekly-score-chart.component';

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
