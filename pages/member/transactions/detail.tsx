import TransactionDetailContent from '../../../components/organisms/TransactionsDetailContent';

export default function TransactionDetail(): JSX.Element {
  return (
    <section className="transactions-detail overflow-auto">
      <TransactionDetailContent />
    </section>
  );
}
