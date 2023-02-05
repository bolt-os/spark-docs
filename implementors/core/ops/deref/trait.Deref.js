(function() {var implementors = {
"elf":[["impl Deref for <a class=\"struct\" href=\"elf/struct.Section.html\" title=\"struct elf::Section\">Section</a>&lt;'_&gt;"],["impl Deref for <a class=\"struct\" href=\"elf/struct.Segment.html\" title=\"struct elf::Segment\">Segment</a>&lt;'_&gt;"],["impl Deref for <a class=\"struct\" href=\"elf/struct.Symbol.html\" title=\"struct elf::Symbol\">Symbol</a>&lt;'_&gt;"],["impl Deref for <a class=\"struct\" href=\"elf/struct.Elf.html\" title=\"struct elf::Elf\">Elf</a>&lt;'_&gt;"]],
"gimli":[["impl&lt;'input, Endian&gt; Deref for <a class=\"struct\" href=\"gimli/read/struct.EndianSlice.html\" title=\"struct gimli::read::EndianSlice\">EndianSlice</a>&lt;'input, Endian&gt;<span class=\"where fmt-newline\">where<br>    Endian: <a class=\"trait\" href=\"gimli/trait.Endianity.html\" title=\"trait gimli::Endianity\">Endianity</a>,</span>"]],
"limine":[["impl&lt;T&gt; Deref for <a class=\"struct\" href=\"limine/struct.LiminePtr.html\" title=\"struct limine::LiminePtr\">LiminePtr</a>&lt;T&gt;"],["impl Deref for <a class=\"struct\" href=\"limine/struct.KernelFile.html\" title=\"struct limine::KernelFile\">KernelFile</a>"]],
"lock_api":[["impl&lt;'a, R: <a class=\"trait\" href=\"lock_api/trait.RawMutex.html\" title=\"trait lock_api::RawMutex\">RawMutex</a> + 'a, T: ?Sized + 'a&gt; Deref for <a class=\"struct\" href=\"lock_api/struct.MutexGuard.html\" title=\"struct lock_api::MutexGuard\">MutexGuard</a>&lt;'a, R, T&gt;"],["impl&lt;'a, R: <a class=\"trait\" href=\"lock_api/trait.RawMutex.html\" title=\"trait lock_api::RawMutex\">RawMutex</a> + 'a, T: ?Sized + 'a&gt; Deref for <a class=\"struct\" href=\"lock_api/struct.MappedMutexGuard.html\" title=\"struct lock_api::MappedMutexGuard\">MappedMutexGuard</a>&lt;'a, R, T&gt;"],["impl&lt;'a, R: <a class=\"trait\" href=\"lock_api/trait.RawMutex.html\" title=\"trait lock_api::RawMutex\">RawMutex</a> + 'a, G: <a class=\"trait\" href=\"lock_api/trait.GetThreadId.html\" title=\"trait lock_api::GetThreadId\">GetThreadId</a> + 'a, T: ?Sized + 'a&gt; Deref for <a class=\"struct\" href=\"lock_api/struct.ReentrantMutexGuard.html\" title=\"struct lock_api::ReentrantMutexGuard\">ReentrantMutexGuard</a>&lt;'a, R, G, T&gt;"],["impl&lt;'a, R: <a class=\"trait\" href=\"lock_api/trait.RawMutex.html\" title=\"trait lock_api::RawMutex\">RawMutex</a> + 'a, G: <a class=\"trait\" href=\"lock_api/trait.GetThreadId.html\" title=\"trait lock_api::GetThreadId\">GetThreadId</a> + 'a, T: ?Sized + 'a&gt; Deref for <a class=\"struct\" href=\"lock_api/struct.MappedReentrantMutexGuard.html\" title=\"struct lock_api::MappedReentrantMutexGuard\">MappedReentrantMutexGuard</a>&lt;'a, R, G, T&gt;"],["impl&lt;'a, R: <a class=\"trait\" href=\"lock_api/trait.RawRwLock.html\" title=\"trait lock_api::RawRwLock\">RawRwLock</a> + 'a, T: ?Sized + 'a&gt; Deref for <a class=\"struct\" href=\"lock_api/struct.RwLockReadGuard.html\" title=\"struct lock_api::RwLockReadGuard\">RwLockReadGuard</a>&lt;'a, R, T&gt;"],["impl&lt;'a, R: <a class=\"trait\" href=\"lock_api/trait.RawRwLock.html\" title=\"trait lock_api::RawRwLock\">RawRwLock</a> + 'a, T: ?Sized + 'a&gt; Deref for <a class=\"struct\" href=\"lock_api/struct.RwLockWriteGuard.html\" title=\"struct lock_api::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'a, R, T&gt;"],["impl&lt;'a, R: <a class=\"trait\" href=\"lock_api/trait.RawRwLockUpgrade.html\" title=\"trait lock_api::RawRwLockUpgrade\">RawRwLockUpgrade</a> + 'a, T: ?Sized + 'a&gt; Deref for <a class=\"struct\" href=\"lock_api/struct.RwLockUpgradableReadGuard.html\" title=\"struct lock_api::RwLockUpgradableReadGuard\">RwLockUpgradableReadGuard</a>&lt;'a, R, T&gt;"],["impl&lt;'a, R: <a class=\"trait\" href=\"lock_api/trait.RawRwLock.html\" title=\"trait lock_api::RawRwLock\">RawRwLock</a> + 'a, T: ?Sized + 'a&gt; Deref for <a class=\"struct\" href=\"lock_api/struct.MappedRwLockReadGuard.html\" title=\"struct lock_api::MappedRwLockReadGuard\">MappedRwLockReadGuard</a>&lt;'a, R, T&gt;"],["impl&lt;'a, R: <a class=\"trait\" href=\"lock_api/trait.RawRwLock.html\" title=\"trait lock_api::RawRwLock\">RawRwLock</a> + 'a, T: ?Sized + 'a&gt; Deref for <a class=\"struct\" href=\"lock_api/struct.MappedRwLockWriteGuard.html\" title=\"struct lock_api::MappedRwLockWriteGuard\">MappedRwLockWriteGuard</a>&lt;'a, R, T&gt;"]],
"scopeguard":[["impl&lt;T, F, S&gt; Deref for <a class=\"struct\" href=\"scopeguard/struct.ScopeGuard.html\" title=\"struct scopeguard::ScopeGuard\">ScopeGuard</a>&lt;T, F, S&gt;<span class=\"where fmt-newline\">where<br>    F: FnOnce(T),<br>    S: <a class=\"trait\" href=\"scopeguard/trait.Strategy.html\" title=\"trait scopeguard::Strategy\">Strategy</a>,</span>"]],
"spark":[["impl Deref for <a class=\"struct\" href=\"spark/dev/block/nvme/identify/struct.NamespaceList.html\" title=\"struct spark::dev::block::nvme::identify::NamespaceList\">NamespaceList</a>"],["impl Deref for <a class=\"struct\" href=\"spark/dev/block/nvme/identify/struct.ActiveNamespaceIdList.html\" title=\"struct spark::dev::block::nvme::identify::ActiveNamespaceIdList\">ActiveNamespaceIdList</a>"],["impl&lt;C: <a class=\"trait\" href=\"spark/dev/block/nvme/identify/trait.IoCommandSet.html\" title=\"trait spark::dev::block::nvme::identify::IoCommandSet\">IoCommandSet</a>&gt; Deref for <a class=\"struct\" href=\"spark/dev/block/nvme/identify/struct.IoCommandSetActiveNamespaceIdList.html\" title=\"struct spark::dev::block::nvme::identify::IoCommandSetActiveNamespaceIdList\">IoCommandSetActiveNamespaceIdList</a>&lt;C&gt;"],["impl&lt;C&gt; Deref for <a class=\"struct\" href=\"spark/dev/block/nvme/identify/struct.IoCommandSetIdentifyNamespace.html\" title=\"struct spark::dev::block::nvme::identify::IoCommandSetIdentifyNamespace\">IoCommandSetIdentifyNamespace</a>&lt;C&gt;<span class=\"where fmt-newline\">where<br>    C: <a class=\"trait\" href=\"spark/dev/block/nvme/identify/trait.IoCommandSetWithIdentifyNamespace.html\" title=\"trait spark::dev::block::nvme::identify::IoCommandSetWithIdentifyNamespace\">IoCommandSetWithIdentifyNamespace</a>,</span>"],["impl&lt;'elf&gt; Deref for <a class=\"struct\" href=\"spark/rtld/struct.Rtld.html\" title=\"struct spark::rtld::Rtld\">Rtld</a>&lt;'elf&gt;"]],
"spin":[["impl&lt;T, F: FnOnce() -&gt; T, R: <a class=\"trait\" href=\"spin/relax/trait.RelaxStrategy.html\" title=\"trait spin::relax::RelaxStrategy\">RelaxStrategy</a>&gt; Deref for <a class=\"struct\" href=\"spin/lazy/struct.Lazy.html\" title=\"struct spin::lazy::Lazy\">Lazy</a>&lt;T, F, R&gt;"],["impl&lt;'a, T: ?Sized&gt; Deref for <a class=\"struct\" href=\"spin/mutex/spin/struct.SpinMutexGuard.html\" title=\"struct spin::mutex::spin::SpinMutexGuard\">SpinMutexGuard</a>&lt;'a, T&gt;"],["impl&lt;'a, T: ?Sized&gt; Deref for <a class=\"struct\" href=\"spin/mutex/struct.MutexGuard.html\" title=\"struct spin::mutex::MutexGuard\">MutexGuard</a>&lt;'a, T&gt;"],["impl&lt;'rwlock, T: ?Sized&gt; Deref for <a class=\"struct\" href=\"spin/rwlock/struct.RwLockReadGuard.html\" title=\"struct spin::rwlock::RwLockReadGuard\">RwLockReadGuard</a>&lt;'rwlock, T&gt;"],["impl&lt;'rwlock, T: ?Sized, R&gt; Deref for <a class=\"struct\" href=\"spin/rwlock/struct.RwLockUpgradableGuard.html\" title=\"struct spin::rwlock::RwLockUpgradableGuard\">RwLockUpgradableGuard</a>&lt;'rwlock, T, R&gt;"],["impl&lt;'rwlock, T: ?Sized, R&gt; Deref for <a class=\"struct\" href=\"spin/rwlock/struct.RwLockWriteGuard.html\" title=\"struct spin::rwlock::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'rwlock, T, R&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()