import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhSampleApplicationRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { JhSampleApplicationCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { JhSampleApplicationLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { JhSampleApplicationDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { JhSampleApplicationTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { JhSampleApplicationEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { JhSampleApplicationJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { JhSampleApplicationJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhSampleApplicationRegionMySuffixModule,
        JhSampleApplicationCountryMySuffixModule,
        JhSampleApplicationLocationMySuffixModule,
        JhSampleApplicationDepartmentMySuffixModule,
        JhSampleApplicationTaskMySuffixModule,
        JhSampleApplicationEmployeeMySuffixModule,
        JhSampleApplicationJobMySuffixModule,
        JhSampleApplicationJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhSampleApplicationEntityModule {}
