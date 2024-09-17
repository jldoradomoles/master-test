import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapEmployeeSummaryFromApiToVm } from './project.mapper';
import { mapEmployeeSummaryListFromApiToVm } from './project.mapper';
import { mapProjectFromApiToVm } from './project.mapper';

describe('mapEmployeeSummaryFromApiToVm', () => {
  it('should map employee summary from API to view model', () => {
    // Arrange
    const employeeSummary: apiModel.EmployeeSummary = {
      id: '1',
      employeeName: 'John Doe',
      isAssigned: true,
    };

    const expectedViewModel: viewModel.EmployeeSummary = {
      id: '1',
      employeeName: 'John Doe',
      isAssigned: true,
    };

    // Act
    const result = mapEmployeeSummaryFromApiToVm(employeeSummary);

    // Assert
    expect(result).toEqual(expectedViewModel);
  });

  it('should return an empty employee summary when input is undefined', () => {
    // Arrange
    const employeeSummary = undefined;

    // Act
    const result = mapEmployeeSummaryFromApiToVm(employeeSummary);

    // Assert
    expect(result).toEqual(null);
  });
});

describe('mapEmployeeSummaryListFromApiToVm', () => {
  it('should map employee summary list from API to view model', () => {
    // Arrange
    const employeeSummaryList: apiModel.EmployeeSummary[] = [
      {
        id: '1',
        employeeName: 'John Doe',
        isAssigned: true,
      },
      {
        id: '2',
        employeeName: 'Jane Smith',
        isAssigned: false,
      },
    ];

    const expectedViewModelList: viewModel.EmployeeSummary[] = [
      {
        id: '1',
        employeeName: 'John Doe',
        isAssigned: true,
      },
      {
        id: '2',
        employeeName: 'Jane Smith',
        isAssigned: false,
      },
    ];

    // Act
    const result = mapEmployeeSummaryListFromApiToVm(employeeSummaryList);

    // Assert
    expect(result).toEqual(expectedViewModelList);
  });
});

describe('mapProjectFromApiToVm', () => {
  it('should map project from API to view model', () => {
    // Arrange
    const project: apiModel.Project = {
      id: '1',
      name: '',
      isActive: false,
      employees: [
        {
          id: '1',
          employeeName: 'John Doe',
          isAssigned: true,
        },
        {
          id: '2',
          employeeName: 'Jane Smith',
          isAssigned: false,
        },
      ],
    };

    const expectedViewModel: viewModel.Project = {
      id: '1',
      name: '',
      isActive: false,
      employees: [
        {
          id: '1',
          employeeName: 'John Doe',
          isAssigned: true,
        },
        {
          id: '2',
          employeeName: 'Jane Smith',
          isAssigned: false,
        },
      ],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedViewModel);
  });
});
