import { publishEvent } from "../events"
import {
  Event,
  ViewCalculationCreatedEvent,
  ViewCalculationDeletedEvent,
  ViewCalculationUpdatedEvent,
  ViewCreatedEvent,
  ViewDeletedEvent,
  ViewExportedEvent,
  ViewFilterCreatedEvent,
  ViewFilterDeletedEvent,
  ViewFilterUpdatedEvent,
  ViewUpdatedEvent,
  View,
  ViewCalculation,
  Table,
  TableExportFormat,
} from "@budibase/types"

/* eslint-disable */

export async function created(view: View, timestamp?: string | number) {
  const properties: ViewCreatedEvent = {
    tableId: view.tableId,
  }
  await publishEvent(Event.VIEW_CREATED, properties, timestamp)
}

export async function updated(view: View) {
  const properties: ViewUpdatedEvent = {
    tableId: view.tableId,
  }
  await publishEvent(Event.VIEW_UPDATED, properties)
}

export async function deleted(view: View) {
  const properties: ViewDeletedEvent = {
    tableId: view.tableId,
  }
  await publishEvent(Event.VIEW_DELETED, properties)
}

export async function exported(table: Table, format: TableExportFormat) {
  const properties: ViewExportedEvent = {
    tableId: table._id as string,
    format,
  }
  await publishEvent(Event.VIEW_EXPORTED, properties)
}

export async function filterCreated(view: View, timestamp?: string | number) {
  const properties: ViewFilterCreatedEvent = {
    tableId: view.tableId,
  }
  await publishEvent(Event.VIEW_FILTER_CREATED, properties, timestamp)
}

export async function filterUpdated(view: View) {
  const properties: ViewFilterUpdatedEvent = {
    tableId: view.tableId,
  }
  await publishEvent(Event.VIEW_FILTER_UPDATED, properties)
}

export async function filterDeleted(view: View) {
  const properties: ViewFilterDeletedEvent = {
    tableId: view.tableId,
  }
  await publishEvent(Event.VIEW_FILTER_DELETED, properties)
}

export async function calculationCreated(
  view: View,
  timestamp?: string | number
) {
  const properties: ViewCalculationCreatedEvent = {
    tableId: view.tableId,
    calculation: view.calculation as ViewCalculation,
  }
  await publishEvent(Event.VIEW_CALCULATION_CREATED, properties, timestamp)
}

export async function calculationUpdated(view: View) {
  const properties: ViewCalculationUpdatedEvent = {
    tableId: view.tableId,
    calculation: view.calculation as ViewCalculation,
  }
  await publishEvent(Event.VIEW_CALCULATION_UPDATED, properties)
}

export async function calculationDeleted(existingView: View) {
  const properties: ViewCalculationDeletedEvent = {
    tableId: existingView.tableId,
    calculation: existingView.calculation as ViewCalculation,
  }
  await publishEvent(Event.VIEW_CALCULATION_DELETED, properties)
}
